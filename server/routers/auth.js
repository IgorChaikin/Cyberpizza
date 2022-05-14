const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { Types } = require('mongoose');
const { User, Cart, LastName, FirstName } = require('../models');
const { signToken } = require('../../utils/jwt');
const { withFullNameTemplate } = require('../shared');
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

async function createUser(lastName, firstName, phone, password) {
  let lastNameFromDb = await LastName.findOne({ name: lastName });
  if (!lastNameFromDb) {
    lastNameFromDb = await new LastName({ name: lastName }).save();
  }

  let firstNameFromDb = await FirstName.findOne({ name: firstName });
  if (!firstNameFromDb) {
    firstNameFromDb = await new FirstName({ name: firstName }).save();
  }

  const hash = bcrypt.hashSync(password, 8);

  return new User({
    lastNameId: lastNameFromDb._id,
    firstNameId: firstNameFromDb._id,
    // patronymicId: patronymicFromDb?._id ?? null,
    phone,
    password: hash,
  });
}

auth.post('/register', (request, response) => {
  return registerValidationSchema
    .validate(request.body)
    .then(async () => {
      const { phone, password, lastName, firstName /* , patronymic */ } = request.body;
      const firstUser = await User.findOne({});
      const samePhoneUser = await User.findOne({ phone });
      if (samePhoneUser) {
        // users with same phones not allowed
        return response.sendStatus(409);
      }
      const user = await createUser(lastName, firstName, /* patronymic, */ phone, password);
      // first registered user become admin
      user.roleId = firstUser ? ObjectId(userId) : ObjectId(adminId);
      const newUser = await user.save();
      const { _id, roleId, isActive } = newUser;
      const { cartId } = request.cookies;
      await Cart.updateOne({ _id: ObjectId(cartId) }, { $set: { userId: _id } });
      const token = signToken({ _id, roleId, isActive });
      response.cookie('token', token /* , { secure: false, maxAge: 3600 * 24 } */);
      return response.json({ phone, isUser: roleId.equals(ObjectId(userId)) });
    })
    .catch(() => response.sendStatus(422));
});

auth.post('/login', (request, response) => {
  return loginValidationSchema
    .validate(request.body)
    .then(() => {
      const { phone, password } = request.body;
      return User.findOne({ phone }).then((user) => {
        // check if user exists and is user banned
        if (!user || !bcrypt.compareSync(password, user.password) || !user.isActive) {
          return response.sendStatus(403);
        }
        const { _id, roleId, isActive } = user;
        return Cart.findOne({ userId: ObjectId(_id) }).then((cart) => {
          if (cart) {
            response.cookie('cartId', cart._id /* , { secure: false, maxAge: 3600 * 24 } */);
          } else {
            response.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            response.header('Expires', '-1');
            response.header('Pragma', 'no-cache');

            response.clearCookie('cartId', { path: '/' /* , domain: 'localhost' */ });
          }
          const token = signToken({ _id, roleId, isActive });
          response.cookie('token', token /* , { secure: false, maxAge: 3600 * 24 } */);
          response.json({ phone, isUser: roleId.equals(ObjectId(userId)) });
        });
      });
    })
    .catch(() => response.sendStatus(422));
});

auth.patch('/logout', (request, response) => {
  const { decoded } = request;
  return User.findOne({ _id: ObjectId(decoded._id) }).then((result) => {
    if (!result) {
      return response.sendStatus(403);
    }
    response.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    response.header('Expires', '-1');
    response.header('Pragma', 'no-cache');

    response.clearCookie('token', { path: '/' });
    response.clearCookie('cartId', { path: '/' });

    return response.sendStatus(200);
  });
});

auth.get('/username', async (request, response) => {
  const { decoded } = request;

  const result = await User.aggregate([
    { $match: { _id: ObjectId(decoded?._id), isActive: true } },
    ...withFullNameTemplate,
  ]);

  return response.json({
    username: result[0]?.username,
    isUser: result ? result[0]?.roleId.equals(ObjectId(userId)) : true,
  });
});

module.exports = auth;
