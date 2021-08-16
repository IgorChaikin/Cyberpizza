const express = require('express');
const mongoose = require('mongoose');
const models = require('../models');

const api = express.Router();
const { Types } = mongoose;
const { ObjectId } = Types;
const { Category, Item, Filter, Discount, Order, Cart } = models;

function getOrders(cartId) {
  return Cart.aggregate([
    { $match: { $expr: { $eq: ['$_id', ObjectId(cartId)] } } },
    {
      $lookup: {
        from: 'orderstages',
        let: { orderIds: '$orderIds' },
        as: 'stages',
        pipeline: [
          { $sort: { _id: 1 } },
          {
            $lookup: {
              from: 'orders',
              let: { orderStageId: '$_id' },
              as: 'orders',
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$$orderStageId', '$orderStageId'] },
                        { $in: ['$_id', '$$orderIds'] },
                      ],
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
                {
                  $unwind: { path: '$item', preserveNullAndEmptyArrays: true },
                },
              ],
            },
          },
        ],
      },
    },
  ]).then((query) => query[0]);
}

function getPrice(orderId) {
  return Order.aggregate([
    { $match: { $expr: { $eq: ['$_id', ObjectId(orderId)] } } },
    {
      $lookup: {
        from: 'items',
        localField: 'itemId',
        foreignField: '_id',
        as: 'item',
      },
    },
    {
      $unwind: { path: '$item', preserveNullAndEmptyArrays: true },
    },
  ]).then((query) => query[0].item.price);
}

function createCart() {
  const cart = new Cart({});
  return cart.save().then((item) => item._id);
}

function updateCart(cartId, orderId, isDelete = false) {
  return getPrice(orderId).then((price) => {
    const update = isDelete
      ? { $pull: { orderIds: orderId }, $inc: { price: -price } }
      : { $push: { orderIds: orderId }, $inc: { price } };

    return Cart.updateMany({ _id: cartId }, update);
  });
}

api.get('/categories', (request, response) => {
  Category.find({})
    .sort({ _id: 1 })
    .exec((err, categories) => response.json(categories));
});

api.get('/items', (request, response) => {
  const { id } = request.query;
  Item.find({ categoryId: id })
    .sort({ title: 1 })
    .exec((err, items) => response.json(items));
});

api.get('/orders', (request, response) => {
  getOrders(request.cookies?.cartId).then((res) => response.json(res));
});

api.get('/filters', (request, response) => {
  Filter.find({})
    .sort({ _id: 1 })
    .exec((err, filters) => response.json(filters));
});

api.get('/discounts', (request, response) => {
  Discount.find({}, (err, discounts) => response.json(discounts.map((elem) => elem.value)));
});

api.post('/orders', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }

  const order = new Order({
    orderStageId: ObjectId('000000000000000000000000'),
    itemId: request.body.id,
    time: request.body.time,
  });

  // add order firstly
  return order.save().then((item) => {
    const { cartId } = request.cookies;

    if (!cartId) {
      // create new cart if order is first and no cart id in cookies
      createCart().then((id) => {
        // set new cart id in cookies
        response.cookie('cartId', id);
        updateCart(id, item._id).then(() => getOrders(id).then((res) => response.json(res)));
      });
    } else {
      updateCart(cartId, item._id).then(() => getOrders(cartId).then((res) => response.json(res)));
    }
  });
});

module.exports = api;
