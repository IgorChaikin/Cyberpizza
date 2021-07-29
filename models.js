const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;
const { ObjectId } = Types;

// schemas definition
const categoryScheme = new Schema({
  _id: ObjectId,
  title: String,
});

const orderStageScheme = new Schema({
  title: String,
});

const orderScheme = new Schema({
  orderStageId: ObjectId,
  itemId: ObjectId,
  time: Number,
});

const itemScheme = new Schema({
  imgPath: String,
  price: Number,
  title: String,
  description: String,
  filterIds: [ObjectId],
  categoryId: ObjectId,
});

const filterScheme = new Schema({
  name: String,
});

const discountScheme = new Schema({
  value: String,
});

// models definition

module.exports = {
  Category: model('Category', categoryScheme),
  Order: model('Order', orderScheme),
  OrderStage: model('OrderStage', orderStageScheme),
  Item: model('Item', itemScheme),
  Filter: model('Filter', filterScheme),
  Discount: model('Discount', discountScheme),
};
