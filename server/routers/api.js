const express = require('express');
const mongoose = require('mongoose');
const models = require('../models');

const api = express.Router();
const { Types } = mongoose;
const { ObjectId } = Types;
const {
  Category, Order, OrderStage, Item, Filter, Discount,
} = models;

function getOrders() {
  return OrderStage.aggregate([
    {
      $lookup: {
        from: 'orders',
        let: { orderStageId: '$_id' },
        as: 'orders',
        pipeline: [
          {
            $match: {
              $expr: { $eq: ['$$orderStageId', '$orderStageId'] },
            },
          },
          {
            $lookup: {
              from: 'items',
              localField: 'itemId',
              foreignField: '_id',
              as: 'item',
            },
          },
          {
            $unwind: {
              path: '$item',
              preserveNullAndEmptyArrays: true,
            },
          },
        ],
      },
    },
  ]).sort({ _id: 1 });
}

api.use(express.json());

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
  getOrders().then((res) => response.json(res));
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
  return order.save().then(() => getOrders().then((res) => response.json(res)));
});

module.exports = api;
