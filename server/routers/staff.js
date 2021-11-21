const express = require('express');
const path = require('path');
const { Types } = require('mongoose');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const staffId = process.env.STAFF_ID;

const { Staff, Order, OrderStage, Shop } = require('../models');
const {
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkRoleMiddleware,
} = require('../middlewares');

const staff = express.Router();
const { ObjectId } = Types;

const addressTemplate = [
  {
    $lookup: {
      from: 'addresses',
      let: { addressId: '$addressId' },
      as: 'address',
      pipeline: [
        { $match: { $expr: { $eq: ['$$addressId', '$_id'] } } },
        {
          $lookup: {
            from: 'cities',
            localField: 'cityId',
            foreignField: '_id',
            as: 'city',
          },
        },
        {
          $lookup: {
            from: 'streets',
            localField: 'streetId',
            foreignField: '_id',
            as: 'street',
          },
        },
        { $unwind: { path: '$city', preserveNullAndEmptyArrays: true } },
        { $unwind: { path: '$street', preserveNullAndEmptyArrays: true } },
      ],
    },
  },
  { $unwind: { path: '$address', preserveNullAndEmptyArrays: true } },
];

async function getOrdersWithAddress(_id, stageId) {
  const staffFromDb = await Staff.findOne({ userId: ObjectId(_id) });

  return Order.aggregate([
    {
      $match: {
        $expr: {
          $and: [
            { $eq: ['$shopId', staffFromDb.shopId] },
            { $eq: ['$orderStageId', ObjectId(stageId)] },
          ],
        },
      },
    },
    ...addressTemplate,
  ]);
}

async function getShopWithAddress(shopId) {
  return Shop.aggregate([
    { $match: { $expr: { $eq: ['$_id', shopId] } } },
    ...addressTemplate,
  ]).then((res) => res[0]);
}

staff.use(checkTokenMiddleware);
staff.use(checkActiveMiddleware);
staff.use(checkRoleMiddleware([staffId]));

staff.get('/orders/:id', (request, response) => {
  const { _id } = request.decoded;
  const stageid = request.params.id;
  return getOrdersWithAddress(_id, stageid).then((result) => response.json(result));
});

staff.get('/stages', (request, response) => {
  return OrderStage.find({}).then((result) => response.json(result));
});

staff.get('/shop', async (request, response) => {
  const { _id } = request.decoded;
  const staffFromDb = await Staff.findOne({ userId: ObjectId(_id) });
  return getShopWithAddress(staffFromDb.shopId).then((result) => response.json(result));
});

staff.put('/shop', async (request, response) => {
  const { _id } = request.decoded;
  const staffFromDb = await Staff.findOne({ userId: ObjectId(_id) });
  const { enabling } = request.body;
  await Shop.updateOne({ _id: staffFromDb.shopId }, { isEnable: enabling });
  return getShopWithAddress(staffFromDb.shopId).then((result) => response.json(result));
});

staff.put('/orders/:id', (request, response) => {
  const { _id } = request.decoded;
  const stageid = request.params.id;
  return Promise.allSettled(
    request.body.changes.map(async (elem) =>
      Order.updateOne({ _id: ObjectId(elem._id) }, { orderStageId: ObjectId(elem.orderStageId) })
    )
  ).then(() => getOrdersWithAddress(_id, stageid).then((result) => response.json(result)));
});

staff.delete('/orders/:id', async (request, response) => {
  const { deletedId } = request.body;
  await Order.deleteOne({ _id: ObjectId(deletedId) });
  const { _id } = request.decoded;
  const stageid = request.params.id;
  getOrdersWithAddress(_id, stageid).then((result) => response.json(result));
});

module.exports = staff;
