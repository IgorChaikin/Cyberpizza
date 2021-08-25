const express = require('express');
const { Types } = require('mongoose');
const { Category, Item, Filter, Discount, Order, Cart } = require('../models');
const getOrders = require('../orders.get');
const { verifyToken } = require('../jwt');

const api = express.Router();
const { ObjectId } = Types;

function getOrderWithPrice(orderId) {
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
  ]).then((query) => query[0]);
}

function createCart(userId = null) {
  const cart = new Cart({ userId });
  return cart.save().then((item) => item._id);
}

function updateCart(cartId, orderId, isDelete = false, amount = null) {
  return getOrderWithPrice(orderId).then((order) => {
    const validatedAmount = amount * -1 >= order?.count ? 0 : amount;
    const count = validatedAmount ?? order?.count * (isDelete ? -1 : 1);
    const update = {
      $inc: { price: order?.item.price * count },
    };
    if (!amount) {
      update[isDelete ? '$pull' : '$push'] = { orderIds: orderId };
    }
    return Cart.updateOne({ _id: cartId }, update);
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

api.get('/filters', (request, response) => {
  Filter.find({})
    .sort({ _id: 1 })
    .exec((err, filters) => response.json(filters));
});

api.get('/discounts', (request, response) => {
  Discount.find({}, (err, discounts) => response.json(discounts.map((elem) => elem.value)));
});

api.get('/orders', (request, response) => {
  const { cartId, token } = request.cookies;
  const decoded = verifyToken(token);
  if (decoded && !decoded.isActive) {
    return response.sendStatus(403);
  }
  return getOrders(cartId).then((res) => response.json(res));
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
    const { cartId, token } = request.cookies;
    const decoded = verifyToken(token);
    if (decoded && !decoded.isActive) {
      return response.sendStatus(403);
    }
    if (!cartId) {
      // create new cart if order is first and no cart id in cookies
      return createCart(decoded?._id).then((id) => {
        // set new cart id in cookies
        response.cookie('cartId', id, { secure: false, maxAge: 3600 * 24 });
        updateCart(id, item._id).then(() => getOrders(id).then((res) => response.json(res)));
      });
    }
    return updateCart(cartId, item._id).then(() =>
      getOrders(cartId).then((res) => response.json(res))
    );
  });
});

api.patch('/orders', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }
  const { cartId, token } = request.cookies;
  const { id, amount } = request.body;
  const decoded = verifyToken(token);
  if (decoded && !decoded.isActive) {
    return response.sendStatus(403);
  }

  return updateCart(cartId, id, false, amount).then(() =>
    Order.updateOne(
      {
        _id: id,
        count: { $gt: amount * -1 },
      },
      { $inc: { count: amount } }
    ).then(() => getOrders(cartId).then((res) => response.json(res)))
  );
});

api.delete('/orders', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }
  const { cartId, token } = request.cookies;
  const { id } = request.body;
  const decoded = verifyToken(token);
  if (decoded && !decoded.isActive) {
    return response.sendStatus(403);
  }
  // remove order from cart
  return updateCart(cartId, id, true).then(() =>
    // then delete order from db
    Order.deleteOne({ _id: id }).then(() => getOrders(cartId).then((res) => response.json(res)))
  );
});

module.exports = api;
