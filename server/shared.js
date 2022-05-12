const { Types } = require('mongoose');
const { Order } = require('./models');

const { ObjectId } = Types;

const withAddressTemplate = [
  {
    $lookup: {
      from: 'addresses',
      foreignField: '_id',
      localField: 'addressId',
      as: 'address',
    },
  },
  { $unwind: { path: '$address', preserveNullAndEmptyArrays: true } },
];

const withCityAndStreetTemplate = [
  {
    $lookup: {
      from: 'cities',
      localField: 'address.cityId',
      foreignField: '_id',
      as: 'address.city',
    },
  },
  {
    $lookup: {
      from: 'streets',
      localField: 'address.streetId',
      foreignField: '_id',
      as: 'address.street',
    },
  },
  { $unwind: { path: '$address.city', preserveNullAndEmptyArrays: true } },
  { $unwind: { path: '$address.street', preserveNullAndEmptyArrays: true } },
];

const withItemAndSortTemplate = [
  {
    $lookup: {
      from: 'items',
      localField: 'itemId',
      foreignField: '_id',
      as: 'item',
    },
  },
  { $unwind: { path: '$item', preserveNullAndEmptyArrays: true } },
  { $sort: { time: -1 } },
];

const withDiscountTemplate = [
  {
    $lookup: {
      from: 'discounts',
      let: { orderId: '$_id' },
      as: 'discount',
      pipeline: [{ $match: { $expr: { $in: ['$$orderId', '$orderIds'] } } }],
    },
  },
  { $unwind: { path: '$discount', preserveNullAndEmptyArrays: true } },
];

const withFullNameTemplate = [
  {
    $lookup: {
      from: 'lastnames',
      localField: 'lastNameId',
      foreignField: '_id',
      as: 'lastNameFromDb',
    },
  },
  {
    $lookup: {
      from: 'firstnames',
      localField: 'firstNameId',
      foreignField: '_id',
      as: 'firstNameFromDb',
    },
  },
  { $unwind: { path: '$lastNameFromDb', preserveNullAndEmptyArrays: true } },
  { $unwind: { path: '$firstNameFromDb', preserveNullAndEmptyArrays: true } },
  {
    $addFields: {
      username: { $concat: ['$firstNameFromDb.name', ' ', '$lastNameFromDb.name'] },
    },
  },
  { $project: { lastNameFromDb: 0, firstNameFromDb: 0, password: 0 } },
];

const getOrderWithPrice = (orderId) => {
  return Order.aggregate([
    { $match: { $expr: { $eq: ['$_id', ObjectId(orderId)] } } },
    ...withItemAndSortTemplate,
    ...withDiscountTemplate,
  ]).then((query) => query[0]);
};

module.exports = {
  getOrderWithPrice,
  withAddressTemplate,
  withCityAndStreetTemplate,
  withItemAndSortTemplate,
  withDiscountTemplate,
  withFullNameTemplate,
};
