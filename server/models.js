const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;
const { ObjectId } = Types;

// schemas definition
const categoryScheme = new Schema({
  title: { type: String, required: true },
});

const orderStageScheme = new Schema({
  title: { type: String, required: true },
});

const orderScheme = new Schema({
  orderStageId: ObjectId,
  itemId: ObjectId,
  time: { type: Number, required: true },
});

const itemScheme = new Schema({
  imgPath: { type: String, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  filterIds: { type: [ObjectId], default: [] },
  categoryId: ObjectId,
});

const filterScheme = new Schema({
  name: { type: String, required: true },
});

const discountScheme = new Schema({
  value: { type: Number, required: true },
});

const cartScheme = new Schema({
  orderIds: { type: [ObjectId], default: [] },
  price: { type: Number, required: true, default: 0 },
});

// models definition

module.exports = {
  Category: model('Category', categoryScheme),
  Order: model('Order', orderScheme),
  OrderStage: model('OrderStage', orderStageScheme),
  Item: model('Item', itemScheme),
  Filter: model('Filter', filterScheme),
  Discount: model('Discount', discountScheme),
  Cart: model('Cart', cartScheme),
};
