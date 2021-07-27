const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// env from --mode param
require('dotenv').config({
  path: path.join(__dirname, `${process.argv[process.argv.indexOf('--mode') + 1]}.env`),
});
const models = require('./models');

const { Types } = mongoose;
const { ObjectId } = Types;
const {
  Category, Order, OrderStage, Item, Filter, Discount,
} = models;

const port = process.env.PORT || 8080;
const dbConn = process.env.DB_CONN;

// packages import
const app = express();
app.use(express.json());

// give static
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static/media')));
app.use(express.static(path.join(__dirname, 'static/svg')));

// test
app.get('/ping', (req, res) => res.send('pong'));

// html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

function getOrders() {
  return OrderStage.aggregate([
    {
      $lookup: {
        from: 'orders',
        localField: '_id',
        foreignField: 'orderStageId',
        pipeline: [
          {
            $lookup: {
              from: 'items',
              localField: 'itemId',
              foreignField: '_id',
              as: 'item',
            },
          },
          {
            $unwind: {
              path: '$item',
              preserveNullAndEmptyArrays: true,
            },
          },
        ],
        as: 'orders',
      },
    },
  ]);
}

app.get('/categories', (request, response) => {
  Category.find({}, (err, categories) => response.json(categories));
});

app.get('/items', (request, response) => {
  const { id } = request.query;
  Item.find({ categoryId: id }, (err, items) => response.json(items));
});

app.get('/orders', (request, response) => {
  getOrders().then((res) => response.json(res));
});

app.get('/filters', (request, response) => {
  Filter.find({}, (err, filters) => response.json(filters));
});

app.get('/discounts', (request, response) => {
  Discount.find({}, (err, discounts) => response.json(discounts.map((elem) => elem.value)));
});

app.post('/orders', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }

  const order = new Order({
    orderStageId: ObjectId('000000000000000000000000'),
    itemId: request.body.id,
    time: request.body.time,
  });
  return order.save().then(() => getOrders().then((res) => response.json(res)));
});

mongoose.connect(dbConn, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    return console.log(err);
  }

  return app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
