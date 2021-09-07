const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { Types } = require('mongoose');
const { User, Cart } = require('../models');
const { signToken, verifyToken } = require('../jwt');
const { loginValidationSchema, registerValidationSchema } = require('../../validationShemas');

const auth = express.Router();
const { ObjectId } = Types;

auth.post('/register', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }
  return registerValidationSchema
    .validate(request.body)
    .then(() => {
      const { email, password } = request.body;
      const user = new User({
        email,
        password,
      });
      return User.findOne({})
        .then((result) => {
          // first registered user become admin
          user.isAdmin = !result;
        })
        .then(() =>
          User.findOne({ email }).then((result) => {
            if (result) {
              // users with same e-mails not allowed
              return response.sendStatus(409);
            }
            return user.save().then((newUser) => {
              const { _id, isAdmin, isActive } = newUser;
              const token = signToken({ _id, isAdmin, isActive });
              response.clearCookie('cartId', { secure: false, maxAge: 0 });
              response.cookie('token', token, { secure: false, maxAge: 3600 * 24 });
              response.json(email);
            });
          })
        );
    })
    .catch(() => response.sendStatus(422));
});

auth.post('/login', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }
  return loginValidationSchema
    .validate(request.body)
    .then(() => {
      const { email, password } = request.body;

      return User.findOne({ email, password }).then((user) => {
        // check if user exists and is user banned
        if (!user || !user.isActive) {
          return response.sendStatus(403);
        }

        const { _id, isAdmin, isActive } = user;
        return Cart.findOne({ userId: ObjectId(_id) }).then((cart) => {
          if (cart) {
            response.cookie('cartId', cart._id, { secure: false, maxAge: 3600 * 24 });
          } else {
            response.clearCookie('cartId', { secure: false, maxAge: 0 });
          }
          const token = signToken({ _id, isAdmin, isActive });
          response.cookie('token', token, { secure: false, maxAge: 3600 * 24 });
          response.json(email);
        });
      });
    })
    .catch(() => response.sendStatus(422));
});

auth.post('/logout', (request, response) => {
  const { token } = request.cookies;
  const decoded = verifyToken(token);
  if (!decoded || !decoded.isActive) {
    return response.sendStatus(403);
  }
  return User.findOne({ _id: decoded._id }).then((result) => {
    if (!result) {
      return response.sendStatus(403);
    }

    response.clearCookie('token', { secure: false, maxAge: 0 });
    response.clearCookie('cartId', { secure: false, maxAge: 0 });
    return response.sendStatus(201);
  });
});

auth.get('/username', (request, response) => {
  const { token } = request.cookies;
  const decoded = verifyToken(token);
  return User.findOne({ _id: decoded?._id, isActive: true }).then((result) => {
    response.json(result?.email);
  });
});

module.exports = auth;
