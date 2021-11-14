const express = require('express');
const { Types } = require('mongoose');
const path = require('path');
const { Category, Item, Filter, Order, Cart, OrderStage, Address, Shop } = require('../models');
const { checkActiveMiddleware } = require('../middlewares');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const api = express.Router();
const { ObjectId } = Types;
const preOrderedId = process.env.PRE_ORDERED_ID;
const orderedId = process.env.ORDERED_ID;
const payedId = process.env.PAYED_ID;

function getOrders(cartId) {
  const result = {};
  // firstly search cart with price and ids array...
  return Cart.find({ _id: cartId })
    .then((query) => {
      const cart = query[0];
      result.price = cart?.price ?? 0;
      return OrderStage.aggregate([
        {
          $match: {
            $expr: { $ne: ['$_id', ObjectId(payedId)] },
          },
        },
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
                $addFields: {
                  isEditable: { $eq: ['$orderStageId', ObjectId(preOrderedId)] },
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
              { $unwind: { path: '$item', preserveNullAndEmptyArrays: true } },
            ],
          },
        },
        {
          $addFields: {
            isConfirmable: { $eq: ['$_id', ObjectId(preOrderedId)] },
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

async function getEnableShop(shopId = null) {
  if (shopId) {
    const shop = await Shop.findOne({ _id: shopId, isEnabled: true });
    return shop;
  }
  const shops = await Shop.find({ isEnabled: true });
  return shops[Math.floor(Math.random() * shops.length)];
}

async function confirmOrder(filter, shopId, paymentMethodId, isPickup, addressId = null) {
  const update = {
    shopId,
    paymentMethodId,
    isPickup,
    orderStageId: orderedId,
  };
  if (addressId) {
    update.addressId = addressId;
  }
  await Order.updateMany(filter, { $set: update });
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
    orderStageId: ObjectId(preOrderedId),
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
        orderStageId: ObjectId(preOrderedId),
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
    Order.deleteOne({ _id: id, orderStageId: ObjectId(preOrderedId) }).then(() =>
      getOrders(cartId).then((res) => response.json(res))
    )
  );
});

api.put('/orders/confirm', async (request, response) => {
  const { cartId } = request.cookies;
  const cart = await Cart.findOne({ _id: ObjectId(cartId) });
  if (!cart) {
    return response.sendStatus(422);
  }
  const { orderIds } = cart;
  const filter = { _id: { $in: orderIds }, orderStageId: ObjectId(preOrderedId) };
  const { isPickup, paymentMethodId } = request.body;
  if (isPickup) {
    const { shopId } = request.body;
    const shop = await getEnableShop(ObjectId(shopId));
    if (!shop) {
      response.sendStatus(422);
    }
    await confirmOrder(filter, shop._id, ObjectId(paymentMethodId), isPickup, shop.addressId);
  } else {
    const { cityId, streetId, house, building, apartment } = request.body;
    let address = await Address.findOne({ cityId, streetId, house, building, apartment });
    if (!address) {
      address = await new Address({
        cityId: ObjectId(cityId),
        streetId: ObjectId(streetId),
        house,
        building,
        apartment,
      }).save();
    }
    const shop = await getEnableShop();
    if (!shop) {
      response.sendStatus(422);
    }
    await confirmOrder(filter, shop._id, ObjectId(paymentMethodId), isPickup, address._id);
  }
  return getOrders(cartId).then((res) => response.json(res));
});

module.exports = api;
