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

module.exports.Category = model('Category', categoryScheme);
module.exports.Order = model('Order', orderScheme);
module.exports.OrderStage = model('OrderStage', orderStageScheme);
module.exports.Item = model('Item', itemScheme);
module.exports.Filter = model('Filter', filterScheme);
module.exports.Discount = model('Discount', discountScheme);
