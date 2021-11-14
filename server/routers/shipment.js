const express = require('express');
const path = require('path');
const { Types } = require('mongoose');

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { City, Street, Shop, PaymentMethod } = require('../models');
const { checkActiveMiddleware } = require('../middlewares');

const shipment = express.Router();
const { ObjectId } = Types;

function getShops() {
  return Shop.aggregate([
    {
      $match: {
        $expr: { $eq: ['$isEnabled', true] },
      },
    },
    {
      $lookup: {
        from: 'addresses',
        let: { addressId: '$addressId' },
        as: 'address',
        pipeline: [
          {
            $match: {
              $expr: { $eq: ['$$addressId', '$_id'] },
            },
          },
          {
            $lookup: {
              from: 'cities',
              localField: 'cityId',
              foreignField: '_id',
              as: 'city',
            },
          },
          {
            $lookup: {
              from: 'streets',
              localField: 'streetId',
              foreignField: '_id',
              as: 'street',
            },
          },
          { $unwind: { path: '$city', preserveNullAndEmptyArrays: true } },
          { $unwind: { path: '$street', preserveNullAndEmptyArrays: true } },
        ],
      },
    },
    { $unwind: { path: '$address', preserveNullAndEmptyArrays: true } },
  ]);
}

shipment.use(checkActiveMiddleware);

shipment.get('/cities', (request, response) => {
  return City.find({}, { password: 0 }).then((result) => response.json(result));
});

shipment.get('/streets', (request, response) => {
  const { cityId } = request.query;
  return Street.find({ cityIds: { $in: [ObjectId(cityId)] } }).then((result) =>
    response.json(result)
  );
});

shipment.get('/payments', (request, response) => {
  return PaymentMethod.find({}, { password: 0 }).then((result) => response.json(result));
});

shipment.get('/shops', (request, response) => {
  return getShops().then((result) => response.json(result));
});

module.exports = shipment;
