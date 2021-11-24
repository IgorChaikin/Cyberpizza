const express = require('express');
const path = require('path');
const { Types } = require('mongoose');
const { withItemAndSortTemplate } = require('../shared');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const staffId = process.env.STAFF_ID;
const adminId = process.env.ADMIN_ID;

const { User, Cart, Role, Staff } = require('../models');
const {
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkRoleMiddleware,
} = require('../middlewares');

const admin = express.Router();
const { ObjectId } = Types;

const usersTemplate = [
  {
    $lookup: {
      from: 'lastnames',
      localField: 'lastNameId',
      foreignField: '_id',
      as: 'lastNameFromDb',
    },
  },
  {
    $lookup: {
      from: 'firstnames',
      localField: 'firstNameId',
      foreignField: '_id',
      as: 'firstNameFromDb',
    },
  },
  {
    $lookup: {
      from: 'patronymics',
      localField: 'patronymicId',
      foreignField: '_id',
      as: 'patronymicFromDb',
    },
  },
  { $unwind: { path: '$lastNameFromDb', preserveNullAndEmptyArrays: true } },
  { $unwind: { path: '$firstNameFromDb', preserveNullAndEmptyArrays: true } },
  { $unwind: { path: '$patronymicFromDb', preserveNullAndEmptyArrays: true } },
  {
    $addFields: {
      lastName: '$lastNameFromDb.name',
      firstName: '$firstNameFromDb.name',
      patronymic: '$patronymicFromDb.name',
    },
  },
  { $project: { lastNameFromDb: 0, firstNameFromDb: 0, patronymicFromDb: 0, password: 0 } },
];

function getTotal() {
  return (
    Cart.aggregate([
      {
        $lookup: {
          from: 'orders',
          let: { orderIds: '$orderIds' },
          as: 'cartCount',
          pipeline: [
            { $match: { $expr: { $in: ['$_id', '$$orderIds'] } } },
            { $group: { _id: null, count: { $sum: '$count' } } },
          ],
        },
      },
      { $unwind: { path: '$cartCount', preserveNullAndEmptyArrays: true } },
      {
        $group: {
          _id: null,
          totalCount: { $sum: '$cartCount.count' },
          totalPrice: { $sum: '$price' },
        },
      },
    ])
      // return init value if there isn't carts and collection array is empty
      .then((query) => query[0] ?? { totalCount: 0, totalPrice: 0 })
  );
}

function getCarts() {
  return Cart.aggregate([
    {
      $lookup: {
        from: 'orders',
        let: { orderIds: '$orderIds' },
        as: 'lastUpdateAggregate',
        pipeline: [
          { $match: { $expr: { $in: ['$_id', '$$orderIds'] } } },
          { $group: { _id: null, lastOrderDate: { $max: '$time' } } },
        ],
      },
    },
    {
      $lookup: {
        from: 'users',
        let: { userId: '$userId' },
        as: 'user',
        pipeline: [{ $match: { $expr: { $eq: ['$$userId', '$_id'] } } }],
      },
    },
    { $unwind: { path: '$lastUpdateAggregate', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
    { $addFields: { lastUpdate: '$lastUpdateAggregate.lastOrderDate', username: '$user.email' } },
    { $project: { lastUpdateAggregate: 0, user: 0 } },
  ]);
}

function getSingleCart(cartId) {
  return Cart.aggregate([
    { $match: { $expr: { $eq: ['$_id', ObjectId(cartId)] } } },
    {
      $lookup: {
        from: 'orders',
        let: { orderIds: '$orderIds' },
        as: 'orders',
        pipeline: [
          { $match: { $expr: { $in: ['$_id', '$$orderIds'] } } },
          ...withItemAndSortTemplate,
        ],
      },
    },
    {
      $lookup: {
        from: 'users',
        let: { userId: '$userId' },
        as: 'user',
        pipeline: [{ $match: { $expr: { $eq: ['$$userId', '$_id'] } } }],
      },
    },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
    { $addFields: { username: '$user.email' } },
  ]).then((query) => query[0]);
}

function getStaff() {
  return Staff.aggregate([
    {
      $lookup: {
        from: 'users',
        let: { userId: '$userId' },
        as: 'user',
        pipeline: [{ $match: { $expr: { $eq: ['$$userId', '$_id'] } } }, ...usersTemplate],
      },
    },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
  ]);
}

function getUsers() {
  return User.aggregate(usersTemplate);
}

admin.use(checkTokenMiddleware);
admin.use(checkActiveMiddleware);
admin.use(checkRoleMiddleware([adminId]));

admin.get('/', (request, response) => {
  return getTotal().then((result) => response.json(result));
});

admin.get('/users', (request, response) => {
  return getUsers().then((result) => response.json(result));
});

admin.get('/roles', (request, response) => {
  return Role.find({}).then((result) => response.json(result));
});

admin.get('/carts', (request, response) => {
  return getCarts().then((result) => response.json(result));
});

admin.get('/carts/:id', (request, response) => {
  return getSingleCart(request.params.id).then((result) => response.json(result));
});

admin.put('/users', (request, response) => {
  return Promise.allSettled(
    request.body.changes
      // forbade admin to change himself to prevent paradoxes
      // (for example when no one is admin and admin dashboard never can be used)
      .filter((elem) => elem._id !== request.decoded._id)
      .map(async (elem) =>
        User.updateOne(
          { _id: elem._id },
          { isActive: elem.isActive, roleId: ObjectId(elem.roleId) }
        ).then(() =>
          elem.roleId === staffId
            ? new Staff({ userId: ObjectId(elem._id) }).save()
            : Staff.deleteOne({ userId: elem._id })
        )
      )
  ).then(() => getUsers().then((result) => response.json(result)));
});

admin.delete('/users/:id', async (request, response) => {
  const deletedId = request.params.id;
  if (deletedId !== request.decoded._id) {
    await User.deleteOne({ _id: deletedId });
    await Staff.deleteOne({ userId: deletedId });
  }
  getUsers().then((result) => response.json(result));
});

admin.get('/staff', (request, response) => {
  return getStaff().then((result) => response.json(result));
});

admin.put('/staff', (request, response) => {
  return Promise.allSettled(
    request.body.changes
      .filter((elem) => elem._id !== request.decoded._id)
      .map(async (elem) => Staff.updateOne({ _id: elem._id }, { shopId: elem.shopId }))
  ).then(() => getStaff().then((result) => response.json(result)));
});

module.exports = admin;
