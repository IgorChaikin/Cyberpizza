const express = require('express');
const path = require('path');
const { Types } = require('mongoose');
const {
  withAddressTemplate,
  withCityAndStreetTemplate,
  withItemAndSortTemplate,
  withDiscountTemplate,
  getOrderWithPrice,
} = require('../shared');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const staffId = process.env.STAFF_ID;
const payedId = process.env.PAYED_ID;
const preOrderedId = process.env.PRE_ORDERED_ID;

const { Staff, Order, Shop, Cart, OrderStage } = require('../models');
const {
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkRoleMiddleware,
} = require('../middlewares');

const staff = express.Router();
const { ObjectId } = Types;

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
    ...withItemAndSortTemplate,
    ...withAddressTemplate,
    ...withCityAndStreetTemplate,
    ...withDiscountTemplate,
  ]);
}

async function getShopWithAddress(shopId) {
  return Shop.aggregate([
    { $match: { $expr: { $eq: ['$_id', shopId] } } },
    ...withAddressTemplate,
    ...withCityAndStreetTemplate,
  ]).then((res) => res[0]);
}

async function payOrder(orderId) {
  const order = await getOrderWithPrice(orderId);
  const absolutePayedPrice = order?.item.price * order?.count;
  const payedPrice = absolutePayedPrice * (1 - (order?.discount?.value ?? 0) / 100);
  return Cart.updateOne(
    { orderIds: { $in: [order._id] }, price: { $gte: payedPrice } },
    {
      $inc: {
        generalPrice: payedPrice,
        price: -absolutePayedPrice,
      },
    }
  );
}

staff.use(checkTokenMiddleware);
staff.use(checkActiveMiddleware);
staff.use(checkRoleMiddleware([staffId]));

staff.get('/orders/:id', (request, response) => {
  const { _id } = request.decoded;
  const stageId = request.params.id;
  return getOrdersWithAddress(_id, stageId).then((result) => response.json(result));
});

staff.get('/shop', async (request, response) => {
  const { _id } = request.decoded;
  const staffFromDb = await Staff.findOne({ userId: ObjectId(_id) });
  return getShopWithAddress(staffFromDb.shopId).then((result) => response.json(result));
});

staff.get('/stages', async (request, response) => {
  return OrderStage.find({ _id: { $ne: ObjectId(preOrderedId) } }).then((result) =>
    response.json(result)
  );
});

staff.put('/shop', async (request, response) => {
  const { _id } = request.decoded;
  const staffFromDb = await Staff.findOne({ userId: ObjectId(_id) });
  const { enabling } = request.body;
  await Shop.updateOne({ _id: staffFromDb.shopId }, { $set: { isEnabled: enabling } });
  return getShopWithAddress(staffFromDb.shopId).then((result) => response.json(result));
});

staff.put('/orders/:id', (request, response) => {
  const { _id } = request.decoded;
  const stageId = request.params.id;
  return Promise.allSettled(
    request.body.changes.map(async (elem) =>
      Order.updateOne(
        { _id: ObjectId(elem._id), orderStageId: { $ne: ObjectId(payedId) } },
        { orderStageId: ObjectId(elem.orderStageId) }
      ).then(() => (elem.orderStageId === payedId ? payOrder(elem._id) : null))
    )
  ).then(() => getOrdersWithAddress(_id, stageId).then((result) => response.json(result)));
});

staff.delete('/orders/:id', async (request, response) => {
  const { deletedId } = request.body;
  await Order.deleteOne({ _id: ObjectId(deletedId) });
  const { _id } = request.decoded;
  const stageId = request.params.id;
  getOrdersWithAddress(_id, stageId).then((result) => response.json(result));
});

module.exports = staff;
