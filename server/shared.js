const { Types } = require('mongoose');
const { Order } = require('./models');

const { ObjectId } = Types;

const getOrderWithPrice = (orderId) => {
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
    { $unwind: { path: '$item', preserveNullAndEmptyArrays: true } },
  ]).then((query) => query[0]);
};

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

module.exports = { getOrderWithPrice, withAddressTemplate, withCityAndStreetTemplate };
