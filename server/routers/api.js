const express = require('express');
const { Types } = require('mongoose');
const { Category, Item, Filter, Discount, Order, Cart, OrderStage } = require('../models');
const { checkActiveMiddleware } = require('../middlewares');

const api = express.Router();
const { ObjectId } = Types;

function getOrders(cartId) {
  const result = {};
  // firstly search cart with price and ids array...
  return Cart.find({ _id: cartId })
    .then((query) => {
      const cart = query[0];
      result.price = cart?.price ?? 0;
      return OrderStage.aggregate([
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
                    // ...only after that make order query to db for search only orders of
                    // this cart, not all orders. It helps save time during work with db
                    $and: [
                      { $eq: ['$$orderStageId', '$orderStageId'] },
                      { $in: ['$_id', cart?.orderIds ?? []] },
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
              { $unwind: { path: '$item', preserveNullAndEmptyArrays: true } },
            ],
          },
        },
      ]);
    })
    .then((query) => {
      result.stages = query ?? [];
      return result;
    });
}

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

api.use('/orders', checkActiveMiddleware);

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
  const { cartId } = request.cookies;
  return getOrders(cartId).then((res) => response.json(res));
});

api.post('/orders', async (request, response) => {
  let { cartId } = request.cookies;
  const { decoded } = request;
  const { id, time } = request.body;

  const existedItem = await Item.findOne({ _id: request.body.id });
  if (!existedItem) {
    return response.sendStatus(422);
  }

  const order = new Order({
    orderStageId: ObjectId('000000000000000000000000'),
    itemId: ObjectId(id),
    time,
  });
  const newOrder = await order.save();

  if (!cartId) {
    // create new cart if order is first and no cart id in cookies
    cartId = await createCart(decoded?._id);
    // set new cart id in cookies
    response.cookie('cartId', cartId, { secure: false, maxAge: 3600 * 24 });
  }
  await updateCart(cartId, newOrder._id);
  const res = await getOrders(cartId);
  return response.json(res);
});

api.patch('/orders', (request, response) => {
  const { cartId } = request.cookies;
  const { id, amount } = request.body;

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
  const { cartId } = request.cookies;
  const { id } = request.body;
  // remove order from cart
  return updateCart(cartId, id, true).then(() =>
    // then delete order from db
    Order.deleteOne({ _id: id }).then(() => getOrders(cartId).then((res) => response.json(res)))
  );
});

module.exports = api;
