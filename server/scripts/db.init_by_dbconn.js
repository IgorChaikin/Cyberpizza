const mongoose = require('mongoose');
const path = require('path');
const models = require('../models');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { Types } = mongoose;
const { ObjectId } = Types;
const {
  Category,
  Order,
  OrderStage,
  Item,
  Filter,
  Cart,
  Role,
  User,
  City,
  Street,
  Address,
  Shop,
  Card,
  Staff,
  LastName,
  FirstName,
  Patronymic,
} = models;

const adminId = process.env.ADMIN_ID;
const userId = process.env.USER_ID;
const staffId = process.env.STAFF_ID;

const preOrderedId = process.env.PRE_ORDERED_ID;
const payedId = process.env.PAYED_ID;
const orderedId = process.env.ORDERED_ID;

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
      _id: ObjectId(preOrderedId),
      title: 'pre ordered',
    },
    {
      _id: ObjectId(orderedId),
      title: 'ordered',
    },
    {
      _id: ObjectId('000000000000000000000002'),
      title: 'baking',
    },
    {
      _id: ObjectId('000000000000000000000003'),
      title: 'finishing',
    },
    {
      _id: ObjectId('000000000000000000000004'),
      title: 'served',
    },
    {
      _id: ObjectId(payedId),
      title: 'payed',
    },
  ],
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
  roles: [
    {
      _id: ObjectId(adminId),
      title: 'Admin',
    },
    {
      _id: ObjectId(staffId),
      title: 'Staff',
    },
    {
      _id: ObjectId(userId),
      title: 'User',
    },
  ],

  cities: [
    {
      _id: ObjectId('000000000000000000000000'),
      title: 'City-1',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'City-2',
    },
  ],
  streets: [
    {
      _id: ObjectId('000000000000000000000000'),
      title: 'Street-1',
      cityIds: [ObjectId('000000000000000000000000')],
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'Street-2',
      cityIds: [ObjectId('000000000000000000000001')],
    },
    {
      _id: ObjectId('000000000000000000000002'),
      title: 'Street-1-2',
      cityIds: [ObjectId('000000000000000000000001'), ObjectId('000000000000000000000000')],
    },
  ],
  addresses: [
    {
      _id: ObjectId('000000000000000000000000'),
      cityId: ObjectId('000000000000000000000000'),
      streetId: ObjectId('000000000000000000000000'),
      house: 1,
    },
    {
      _id: ObjectId('000000000000000000000001'),
      cityId: ObjectId('000000000000000000000000'),
      streetId: ObjectId('000000000000000000000002'),
      house: 1,
    },
    {
      _id: ObjectId('000000000000000000000002'),
      cityId: ObjectId('000000000000000000000001'),
      streetId: ObjectId('000000000000000000000001'),
      house: 1,
    },
  ],
  shops: [
    {
      addressId: ObjectId('000000000000000000000000'),
    },
    {
      addressId: ObjectId('000000000000000000000001'),
    },
    {
      addressId: ObjectId('000000000000000000000002'),
    },
  ],
};

module.exports = async (dbConn) => {
  const connectionResult = await mongoose
    .connect(dbConn, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return null;
    });

  if (!connectionResult) {
    return false;
  }
  const initResults = await Promise.allSettled([
    Item.deleteMany({}).then(() => Item.insertMany(initialData.items)),
    Category.deleteMany({}).then(() => Category.insertMany(initialData.categories)),
    Filter.deleteMany({}).then(() => Filter.insertMany(initialData.filters)),
    OrderStage.deleteMany({}).then(() => OrderStage.insertMany(initialData.orderStages)),
    Role.deleteMany({}).then(() => Role.insertMany(initialData.roles)),

    City.deleteMany({}).then(() => City.insertMany(initialData.cities)),
    Street.deleteMany({}).then(() => Street.insertMany(initialData.streets)),
    Address.deleteMany({}).then(() => Address.insertMany(initialData.addresses)),
    Shop.deleteMany({}).then(() => Shop.insertMany(initialData.shops)),

    Card.deleteMany({}),
    Order.deleteMany({}),
    Cart.deleteMany({}),
    User.deleteMany({}),
    Staff.deleteMany({}),
    LastName.deleteMany({}),
    FirstName.deleteMany({}),
    Patronymic.deleteMany({}),
  ]);
  await mongoose.connection.close();
  const faledIdx = initResults.findIndex((elem) => elem.status === 'rejected');
  if (faledIdx !== -1) {
    console.log(initResults[faledIdx]);
  }
  return faledIdx === -1;
};
