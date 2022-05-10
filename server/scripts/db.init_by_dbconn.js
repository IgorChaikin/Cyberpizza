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
  Discount,
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
      title: 'Пицца',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'Паста',
    },

    {
      _id: ObjectId('000000000000000000000002'),
      title: 'Сэндвичи',
    },

    {
      _id: ObjectId('000000000000000000000003'),
      title: 'Супы',
    },

    {
      _id: ObjectId('000000000000000000000004'),
      title: 'Салаты',
    },

    {
      _id: ObjectId('000000000000000000000005'),
      title: 'Гарниры',
    },

    {
      _id: ObjectId('000000000000000000000006'),
      title: 'Десерты',
    },

    {
      _id: ObjectId('000000000000000000000007'),
      title: 'Напитки',
    },
  ],
  orderStages: [
    {
      _id: ObjectId(preOrderedId),
      title: 'корзина',
    },
    {
      _id: ObjectId(orderedId),
      title: 'заказано',
    },
    {
      _id: ObjectId('000000000000000000000002'),
      title: 'готовится',
    },
    {
      _id: ObjectId('000000000000000000000003'),
      title: 'готово',
    },
    {
      _id: ObjectId('000000000000000000000004'),
      title: 'доставлено',
    },
    {
      _id: ObjectId(payedId),
      title: 'получено',
    },
  ],
  items: [
    {
      imgPath: '/ham_and_cheese.png',
      price: 26.75,
      title: 'Ветчина и сыр',
      description: 'Ham and cheese ham and cheese ham and cheese ham and cheese ham and cheese',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/margarita.png',
      price: 20.5,
      title: 'Маргарита',
      description: 'Margarita margarita margarita margarita margarita margarita margarita',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/pepperoni.png',
      price: 20.5,
      title: 'Пепперони',
      description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/vegetable.png',
      price: 17.3,
      title: 'Овощная',
      description: 'Vegetable vegetable vegetable vegetable vegetable',
      filterIds: [ObjectId('000000000000000000000000'), ObjectId('000000000000000000000001')],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/italian.png',
      price: 28.0,
      title: 'Итальянская',
      description: 'Italian italian italian italian italian italian italian',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000000'),
    },
    {
      imgPath: '/carbonara.png',
      price: 31.5,
      title: 'Карбонара',
      description: 'Carbonara carbonara carbonara carbonara carbonara carbonara carbonara',
      filterIds: [ObjectId('000000000000000000000000')],
      categoryId: ObjectId('000000000000000000000001'),
    },
    {
      imgPath: '/spaghetti_bolognese.png',
      price: 33.9,
      title: 'Спагетти болоньезе',
      description: 'Spaghetti spaghetti spaghetti spaghetti spaghetti spaghetti spaghetti',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000001'),
    },
    {
      imgPath: '/cola.png',
      price: 11.1,
      title: 'Кока-кола',
      filterIds: [],
      categoryId: ObjectId('000000000000000000000007'),
    },
  ],
  filters: [
    {
      _id: ObjectId('000000000000000000000000'),
      name: 'вегетарианский',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      name: 'веганский',
    },
    {
      _id: ObjectId('000000000000000000000002'),
      name: 'острый',
    },
    {
      _id: ObjectId('000000000000000000000003'),
      name: 'мясо',
    },
    {
      _id: ObjectId('000000000000000000000004'),
      name: 'сыр',
    },
  ],
  roles: [
    {
      _id: ObjectId(adminId),
      title: 'Администратор',
    },
    {
      _id: ObjectId(staffId),
      title: 'Персонал',
    },
    {
      _id: ObjectId(userId),
      title: 'Пользователь',
    },
  ],

  cities: [
    {
      _id: ObjectId('000000000000000000000000'),
      title: 'Минск',
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'Витебск',
    },
  ],
  streets: [
    {
      _id: ObjectId('000000000000000000000000'),
      title: 'Независимости',
      cityIds: [ObjectId('000000000000000000000000')],
    },
    {
      _id: ObjectId('000000000000000000000001'),
      title: 'Баграмяна',
      cityIds: [ObjectId('000000000000000000000001')],
    },
    {
      _id: ObjectId('000000000000000000000002'),
      title: 'Советская',
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
  discounts: [
    {
      value: 10,
      title: 'FIRST',
    },
    {
      value: 20,
      title: '2ND',
    },
    {
      value: 30,
      title: '3RD',
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
    Discount.deleteMany({}).then(() => Discount.insertMany(initialData.discounts)),

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
