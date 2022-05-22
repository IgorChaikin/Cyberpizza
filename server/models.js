const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;
const { ObjectId } = Types;

// schemas definition

// items schemas
const categoryScheme = new Schema({
  title: { type: String, required: true },
});

const orderStageScheme = new Schema({
  title: { type: String, required: true },
});

const orderScheme = new Schema({
  orderStageId: ObjectId,
  itemId: ObjectId,
  count: { type: Number, default: 1 },
  time: { type: Number, required: true },

  addressId: ObjectId,
  shopId: ObjectId,
  isPickup: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
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

const cartScheme = new Schema({
  orderIds: { type: [ObjectId], default: [] },
  price: { type: Number, required: true, default: 0 },
  userId: ObjectId,

  generalPrice: { type: Number, required: true, default: 0 },
});

// user schemas
const roleScheme = new Schema({
  title: { type: String, required: true },
});

const patronymicScheme = new Schema({
  name: { type: String, required: true },
});

const lastNameScheme = new Schema({
  name: { type: String, required: true },
});

const firstNameScheme = new Schema({
  name: { type: String, required: true },
});

const userScheme = new Schema({
  phone: { type: String, required: true },

  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },

  roleId: ObjectId,
  firstNameId: { type: ObjectId, required: true },
  lastNameId: { type: ObjectId, required: true },
  // patronymicId: ObjectId,
});

// shop addresses schemas

const cityScheme = new Schema({
  title: { type: String, required: true },
});

const streetScheme = new Schema({
  title: { type: String, required: true },
  cityIds: { type: [ObjectId], default: [] },
});

const addressScheme = new Schema({
  cityId: { type: ObjectId, required: true },
  streetId: { type: ObjectId, required: true },
  house: { type: Number, required: true },
  building: Number,
  apartment: Number,
});

const staffScheme = new Schema({
  userId: ObjectId,
  shopId: ObjectId,
});

const shopScheme = new Schema({
  addressId: { type: ObjectId, required: true },
  isEnabled: { type: Boolean, default: true },
});

const discountScheme = new Schema({
  cartIds: { type: [ObjectId], default: [] },
  orderIds: { type: [ObjectId], default: [] },
  value: { type: Number, required: true },
  title: { type: String, required: true },
});

// models definition

module.exports = {
  Category: model('Category', categoryScheme),
  Order: model('Order', orderScheme),
  OrderStage: model('OrderStage', orderStageScheme),
  Item: model('Item', itemScheme),
  Filter: model('Filter', filterScheme),
  Cart: model('Cart', cartScheme),
  User: model('User', userScheme),

  Role: model('Role', roleScheme),
  City: model('City', cityScheme),
  Street: model('Street', streetScheme),
  Address: model('Address', addressScheme),
  Staff: model('Staff', staffScheme),
  Shop: model('Shop', shopScheme),
  Discount: model('Discount', discountScheme),

  Patronymic: model('Patronymic', patronymicScheme),
  LastName: model('LastName', lastNameScheme),
  FirstName: model('FirstName', firstNameScheme),
};
