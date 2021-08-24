const mongoose = require('mongoose');
const path = require('path');
const models = require('../models');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { Types } = mongoose;
const { ObjectId } = Types;
const { Category, Order, OrderStage, Item, Filter, Discount, Cart, User } = models;

const dbConn = process.env.DB_CONN;

const initialData = {
  categories: [
    {
      _id: ObjectId('000000000000000000000000'),
      title: 'Pizza',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'Pasta',
    },

    {
      _id: ObjectId('000000000000000000000002'),
      title: 'Sandwiches',
    },

    {
      _id: ObjectId('000000000000000000000003'),
      title: 'Soup',
    },

    {
      _id: ObjectId('000000000000000000000004'),
      title: 'Salads',
    },

    {
      _id: ObjectId('000000000000000000000005'),
      title: 'Sides',
    },

    {
      _id: ObjectId('000000000000000000000006'),
      title: 'Deserts',
    },

    {
      _id: ObjectId('000000000000000000000007'),
      title: 'Drinks',
    },
  ],
  orderStages: [
    {
      _id: ObjectId('000000000000000000000000'),
      title: 'ordered',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'baking',
    },
    {
      _id: ObjectId('000000000000000000000002'),
      title: 'finishing',
    },
    {
      _id: ObjectId('000000000000000000000003'),
      title: 'served',
    },
  ],
  orders: [],
  items: [
    {
      imgPath: '/ham_and_cheese.png',
      price: 26.75,
      title: 'Ham and cheese',
      description: 'Ham and cheese ham and cheese ham and cheese ham and cheese ham and cheese',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/margarita.png',
      price: 20.5,
      title: 'Margarita',
      description: 'Margarita margarita margarita margarita margarita margarita margarita',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/pepperoni.png',
      price: 20.5,
      title: 'Pepperoni',
      description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/vegetable.png',
      price: 17.3,
      title: 'Vegetable',
      description: 'Vegetable vegetable vegetable vegetable vegetable',
      filterIds: [ObjectId('000000000000000000000000'), ObjectId('000000000000000000000001')],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/italian.png',
      price: 28.0,
      title: 'Italian',
      description: 'Italian italian italian italian italian italian italian',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/carbonara.png',
      price: 31.5,
      title: 'Carbonara',
      description: 'Carbonara carbonara carbonara carbonara carbonara carbonara carbonara',
      filterIds: [ObjectId('000000000000000000000000')],
      categoryId: ObjectId('000000000000000000000001'),
    },
    {
      imgPath: '/spaghetti_bolognese.png',
      price: 33.9,
      title: 'Spaghetti bolognese',
      description: 'Spaghetti spaghetti spaghetti spaghetti spaghetti spaghetti spaghetti',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000001'),
    },
    {
      imgPath: '/cola.png',
      price: 11.1,
      title: 'Cola',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000007'),
    },
  ],
  filters: [
    {
      _id: ObjectId('000000000000000000000000'),
      name: 'vegetarian',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      name: 'vegan',
    },
    {
      _id: ObjectId('000000000000000000000002'),
      name: 'tag0',
    },
    {
      _id: ObjectId('000000000000000000000003'),
      name: 'tag1',
    },
    {
      _id: ObjectId('000000000000000000000004'),
      name: 'tag2',
    },
  ],
  discounts: [
    {
      value: 0.1,
    },
  ],
};

mongoose.connect(dbConn, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    return console.log(err);
  }

  return Promise.allSettled([
    Item.remove({}).then(() => Item.insertMany(initialData.items)),
    Category.remove({}).then(() => Category.insertMany(initialData.categories)),
    Filter.remove({}).then(() => Filter.insertMany(initialData.filters)),
    Discount.remove({}).then(() => Discount.insertMany(initialData.discounts)),
    OrderStage.remove({}).then(() => OrderStage.insertMany(initialData.orderStages)),
    Order.remove({}),
    Cart.remove({}),
    User.remove({}),
  ]).then((res) => {
    if (res.findIndex((elem) => elem.status === 'rejected') === -1) {
      mongoose.connection.close().then(() => console.log('Database initialised'));
    } else {
      console.log('Database initialisation failed');
    }
  });
});
