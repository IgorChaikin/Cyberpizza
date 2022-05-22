const express = require('express');
const path = require('path');
const { Types } = require('mongoose');
const { withAddressTemplate, withCityAndStreetTemplate } = require('../shared');

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { City, Street, Shop } = require('../models');
const { checkActiveMiddleware } = require('../middlewares');

const shipment = express.Router();
const { ObjectId } = Types;

function getShops() {
  return Shop.aggregate([...withAddressTemplate, ...withCityAndStreetTemplate]);
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

shipment.get('/shops', (request, response) => {
  return getShops().then((result) => response.json(result));
});

module.exports = shipment;
