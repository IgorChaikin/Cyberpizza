const express = require('express');
const path = require('path');
const { Types } = require('mongoose');

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { User, Cart, Role } = require('../models');
const {
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkAdminMiddleware,
} = require('../middlewares');

const admin = express.Router();
const { ObjectId } = Types;

function getTotal() {
  return (
    Cart.aggregate([
      {
        $lookup: {
          from: 'orders',
          let: { orderIds: '$orderIds' },
          as: 'cartCount',
          pipeline: [
            {
              $match: {
                $expr: { $in: ['$_id', '$$orderIds'] },
              },
            },
            {
              $group: {
                _id: null,
                count: { $sum: '$count' },
              },
            },
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
          {
            $match: {
              $expr: { $in: ['$_id', '$$orderIds'] },
            },
          },
          {
            $group: {
              _id: null,
              lastOrderDate: { $max: '$time' },
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: 'users',
        let: { userId: '$userId' },
        as: 'user',
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ['$$userId', '$_id'],
              },
            },
          },
        ],
      },
    },
    { $unwind: { path: '$lastUpdateAggregate', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
    {
      $addFields: {
        lastUpdate: '$lastUpdateAggregate.lastOrderDate',
        username: '$user.email',
      },
    },
    { $project: { lastUpdateAggregate: 0, user: 0 } },
  ]);
}

function getSingleCart(cartId) {
  return Cart.aggregate([
    {
      $match: {
        $expr: { $eq: ['$_id', ObjectId(cartId)] },
      },
    },
    {
      $lookup: {
        from: 'orders',
        let: { orderIds: '$orderIds' },
        as: 'orders',
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $in: ['$_id', '$$orderIds'] }],
              },
            },
          },
          { $sort: { time: -1 } },
          {
            $lookup: {
              from: 'items',
              localField: 'itemId',
              foreignField: '_id',
              as: 'item',
            },
          },
          { $unwind: { path: '$item', preserveNullAndEmptyArrays: true } },
        ],
      },
    },
    {
      $lookup: {
        from: 'users',
        let: { userId: '$userId' },
        as: 'user',
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ['$$userId', '$_id'],
              },
            },
          },
        ],
      },
    },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
    {
      $addFields: {
        username: '$user.email',
      },
    },
  ]).then((query) => query[0]);
}

admin.use(checkTokenMiddleware);
admin.use(checkActiveMiddleware);
admin.use(checkAdminMiddleware);

admin.get('/', (request, response) => {
  return getTotal().then((result) => response.json(result));
});

admin.get('/users', (request, response) => {
  return User.find({}, { password: 0 }).then((result) => response.json(result));
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
      .map((elem) =>
        User.updateOne(
          { _id: elem._id },
          { isActive: elem.isActive, roleId: ObjectId(elem.roleId) }
        )
      )
  ).then(() => User.find({}, { password: 0 }).then((result) => response.json(result)));
});

module.exports = admin;
