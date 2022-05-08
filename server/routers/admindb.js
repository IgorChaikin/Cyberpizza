const express = require('express');
const { Types } = require('mongoose');
const {
  itemServerValidationSchema,
  titleValidationSchema,
  discountValidationSchema,
} = require('../../validationShemas');

const adminId = process.env.ADMIN_ID;
const { Item, Category, Filter, Discount } = require('../models');
const {
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkRoleMiddleware,
} = require('../middlewares');

const admindb = express.Router();
const { ObjectId } = Types;

admindb.use(checkTokenMiddleware);
admindb.use(checkActiveMiddleware);
admindb.use(checkRoleMiddleware([adminId]));

admindb.get('/items', (request, response) => {
  return Item.find({}).then((result) => response.json(result));
});

admindb.post('/items', (request, response) => {
  itemServerValidationSchema
    .validate(request.body)
    .then(async () => {
      const { imgPath, price, title, description, filterIds, categoryId } = request.body;
      await new Item({
        imgPath,
        price,
        title,
        description,
        filterIds: filterIds.map((elem) => ObjectId(elem)),
        categoryId: ObjectId(categoryId),
      }).save();
      return Item.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.put('/items/:id', (request, response) => {
  const editedId = request.params.id;
  itemServerValidationSchema
    .validate(request.body)
    .then(async () => {
      const { imgPath, price, title, description, filterIds, categoryId } = request.body;
      await Item.updateOne(
        { _id: ObjectId(editedId) },
        {
          $set: {
            imgPath,
            price,
            title,
            description,
            filterIds: filterIds.map((elem) => ObjectId(elem)),
            categoryId: ObjectId(categoryId),
          },
        }
      );
      return Item.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.delete('/items/:id', async (request, response) => {
  const deletedId = request.params.id;
  await Item.deleteOne({ _id: ObjectId(deletedId) });
  return Item.find({}).then((result) => response.json(result));
});

admindb.post('/categories', (request, response) => {
  titleValidationSchema
    .validate(request.body)
    .then(async () => {
      const { title } = request.body;
      await new Category({ title }).save();
      return Category.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.put('/categories/:id', (request, response) => {
  const editedId = request.params.id;
  titleValidationSchema
    .validate(request.body)
    .then(async () => {
      const { title } = request.body;
      await Category.updateOne({ _id: ObjectId(editedId) }, { $set: { title } });
      return Category.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.delete('/categories/:id', async (request, response) => {
  const deletedId = request.params.id;
  await Category.deleteOne({ _id: ObjectId(deletedId) });
  await Item.deleteMany({ categoryId: ObjectId(deletedId) });
  return Category.find({}).then((result) => response.json(result));
});

admindb.post('/filters', (request, response) => {
  titleValidationSchema
    .validate(request.body)
    .then(async () => {
      const { title } = request.body;
      await new Filter({ name: title }).save();
      return Filter.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.put('/filters/:id', (request, response) => {
  const editedId = request.params.id;
  titleValidationSchema
    .validate(request.body)
    .then(async () => {
      const { title } = request.body;
      await Filter.updateOne({ _id: ObjectId(editedId) }, { $set: { name: title } });
      return Filter.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.delete('/filters/:id', async (request, response) => {
  const deletedId = request.params.id;
  await Filter.deleteOne({ _id: ObjectId(deletedId) });
  await Item.updateMany(
    { filterIds: { $in: [ObjectId(deletedId)] } },
    { $pull: { filterIds: ObjectId(deletedId) } }
  );
  return Filter.find({}).then((result) => response.json(result));
});

// ---------------------------------------------------------------------------------------------------------
admindb.get('/discounts', (request, response) => {
  return Discount.find({}).then((result) => response.json(result));
});

admindb.post('/discounts', (request, response) => {
  discountValidationSchema
    .validate(request.body)
    .then(async () => {
      const { title, value } = request.body;
      await new Discount({ title, value }).save();
      return Discount.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.put('/discounts/:id', (request, response) => {
  const editedId = request.params.id;
  discountValidationSchema
    .validate(request.body)
    .then(async () => {
      const { title, value } = request.body;
      await Discount.updateOne({ _id: ObjectId(editedId) }, { $set: { title, value } });
      return Discount.find({}).then((result) => response.json(result));
    })
    .catch(() => response.sendStatus(422));
});

admindb.delete('/discounts/:id', async (request, response) => {
  const deletedId = request.params.id;
  await Discount.deleteOne({ _id: ObjectId(deletedId) });
  return Discount.find({}).then((result) => response.json(result));
});

module.exports = admindb;
