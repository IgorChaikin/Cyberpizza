const express = require('express');
const path = require('path');
const { Types } = require('mongoose');
const { secureCardTemplate } = require('../shared');
const { withAddressTemplate, withCityAndStreetTemplate } = require('../shared');
const { cardValidationSchema } = require('../../validationShemas');

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { City, Street, Shop, Card } = require('../models');
const { checkActiveMiddleware } = require('../middlewares');

const shipment = express.Router();
const { ObjectId } = Types;

function getShops() {
  return Shop.aggregate([...withAddressTemplate, ...withCityAndStreetTemplate]);
}

function getCards(id) {
  return Card.aggregate([{ $match: { $expr: { $eq: [id, '$userId'] } } }, ...secureCardTemplate]);
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

shipment.get('/cards', (request, response) => {
  const { _id } = request.decoded;
  return getCards(ObjectId(_id)).then((result) => response.json(result));
});

shipment.post('/cards', (request, response) => {
  const { _id } = request.decoded;
  cardValidationSchema
    .validate(request.body)
    .then(async () => {
      const { number, name, month, year, cvv } = request.body;
      await new Card({
        number,
        name,
        date: `${month}/${year}`,
        cvv,
        userId: ObjectId(_id),
      }).save();
      return getCards(ObjectId(_id)).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

shipment.get('/shops', (request, response) => {
  return getShops().then((result) => response.json(result));
});

module.exports = shipment;
