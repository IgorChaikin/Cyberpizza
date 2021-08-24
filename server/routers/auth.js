const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { User, Cart } = require('../models');
const { signToken, verifyToken } = require('../jwt');

const auth = express.Router();

auth.post('/register', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }

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
          response.cookie('token', token, { secure: false, maxAge: 3600 * 24 });
          // response.redirect(302, '/');
          response.json(email);
        });
      })
    );
});

auth.post('/login', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }
  const { email, password } = request.body;

  return User.findOneAndUpdate({ email, password }, { isActive: true }, { new: true }).then(
    (user) => {
      if (!user) {
        return response.sendStatus(403);
      }
      const { _id, isAdmin, isActive } = user;
      return Cart.findOne({ userId: _id }).then((cart) => {
        if (cart) {
          response.cookie('cartId', cart._id);
        }
        const token = signToken({ _id, isAdmin, isActive });
        response.cookie('token', token, { secure: false, maxAge: 3600 * 24 });
        response.json(email);
      });
    }
  );
});

auth.patch('/logout', (request, response) => {
  const { token } = request.cookies;
  const decoded = verifyToken(token);
  if (decoded && !decoded.isActive) {
    return response.sendStatus(403);
  }
  return User.findOne({ _id: decoded._id }).then((result) => {
    if (!result) {
      return response.sendStatus(403);
    }
    return User.updateOne({ _id: result._id }, { isActive: false }).then(() => {
      response.clearCookie('token');
      response.clearCookie('cartId');
      response.sendStatus(201);
    });
  });
});

auth.get('/username', (request, response) => {
  const { token } = request.cookies;
  const decoded = verifyToken(token);
  return User.findOne({ _id: decoded?._id }).then((result) => {
    response.json(result?.email);
  });
});

module.exports = auth;
