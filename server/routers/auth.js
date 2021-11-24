const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { Types } = require('mongoose');
const { User, Cart, LastName, Patronymic, FirstName } = require('../models');
const { signToken } = require('../../utils/jwt');
const { loginValidationSchema, registerValidationSchema } = require('../../validationShemas');
const { checkTokenMiddleware, checkActiveMiddleware } = require('../middlewares');

const auth = express.Router();
const { ObjectId } = Types;

const adminId = process.env.ADMIN_ID;
const userId = process.env.USER_ID;

auth.use('/logout', checkTokenMiddleware);
auth.use('/logout', checkActiveMiddleware);
auth.use('/username', checkTokenMiddleware);
auth.use('/username', checkActiveMiddleware);

async function createUser(lastName, firstName, patronymic, email, password) {
  let lastNameFromDb = await LastName.findOne({ name: lastName });
  if (!lastNameFromDb) {
    lastNameFromDb = await new LastName({ name: lastName }).save();
  }

  let firstNameFromDb = await FirstName.findOne({ name: firstName });
  if (!firstNameFromDb) {
    firstNameFromDb = await new FirstName({ name: firstName }).save();
  }

  let patronymicFromDb = patronymic ? await Patronymic.findOne({ name: patronymic }) : null;
  if (!patronymicFromDb && patronymic) {
    patronymicFromDb = await new Patronymic({ name: patronymic }).save();
  }

  const hash = bcrypt.hashSync(password, 8);

  return new User({
    lastNameId: lastNameFromDb._id,
    firstNameId: firstNameFromDb._id,
    patronymicId: patronymicFromDb?._id ?? null,
    email,
    password: hash,
  });
}

auth.post('/register', (request, response) => {
  return registerValidationSchema
    .validate(request.body)
    .then(async () => {
      const { email, password, lastName, firstName, patronymic } = request.body;
      const firstUser = await User.findOne({});
      const sameEmailUser = await User.findOne({ email });
      if (sameEmailUser) {
        // users with same e-mails not allowed
        return response.sendStatus(409);
      }
      const user = await createUser(lastName, firstName, patronymic, email, password);
      // first registered user become admin
      user.roleId = firstUser ? ObjectId(userId) : ObjectId(adminId);
      const newUser = await user.save();
      const { _id, roleId, isActive } = newUser;
      const { cartId } = request.cookies;
      await Cart.updateOne({ _id: ObjectId(cartId) }, { $set: { userId: _id } });
      const token = signToken({ _id, roleId, isActive });
      response.cookie('token', token, { secure: false, maxAge: 3600 * 24 });
      return response.json({ email, isUser: roleId.equals(ObjectId(userId)) });
    })
    .catch(() => response.sendStatus(422));
});

auth.post('/login', (request, response) => {
  return loginValidationSchema
    .validate(request.body)
    .then(() => {
      const { email, password } = request.body;
      return User.findOne({ email }).then((user) => {
        // check if user exists and is user banned
        if (!user || !bcrypt.compareSync(password, user.password) || !user.isActive) {
          return response.sendStatus(403);
        }
        const { _id, roleId, isActive } = user;
        return Cart.findOne({ userId: ObjectId(_id) }).then((cart) => {
          if (cart) {
            response.cookie('cartId', cart._id, { secure: false, maxAge: 3600 * 24 });
          } else {
            response.clearCookie('cartId', { secure: false, maxAge: 0 });
          }
          const token = signToken({ _id, roleId, isActive });
          response.cookie('token', token, { secure: false, maxAge: 3600 * 24 });
          response.json({ email, isUser: roleId.equals(ObjectId(userId)) });
        });
      });
    })
    .catch(() => response.sendStatus(422));
});

auth.post('/logout', (request, response) => {
  const { decoded } = request;
  const { email } = request.body;
  return User.findOne({ _id: decoded._id, email }).then((result) => {
    if (!result) {
      return response.sendStatus(403);
    }
    response.clearCookie('token', { secure: false, maxAge: 0 });
    response.clearCookie('cartId', { secure: false, maxAge: 0 });
    return response.sendStatus(201);
  });
});

auth.get('/username', (request, response) => {
  const { decoded } = request;
  return User.findOne({ _id: decoded?._id, isActive: true }).then((result) => {
    response.json({
      email: result?.email,
      isUser: result ? result.roleId.equals(ObjectId(userId)) : true,
    });
  });
});

module.exports = auth;
