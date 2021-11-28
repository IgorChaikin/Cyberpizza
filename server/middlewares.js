const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { verifyToken } = require('../utils/jwt');

const verifyTokenMiddleware = (request, response, next) => {
  const { token } = request.cookies;
  request.decoded = verifyToken(token);
  return next();
};

const checkTokenMiddleware = (request, response, next) => {
  const { decoded } = request;
  if (!decoded) {
    return response.sendStatus(403);
  }
  return next();
};

const checkRoleMiddleware = (roleIds) => (request, response, next) => {
  const { decoded } = request;
  if (!roleIds.includes(decoded.roleId)) {
    return response.sendStatus(403);
  }
  return next();
};

const checkActiveMiddleware = (request, response, next) => {
  const { decoded } = request;
  if (decoded && !decoded.isActive) {
    return response.sendStatus(403);
  }
  return next();
};

const checkBodyMiddleware = (request, response, next) => {
  if (!request.body) {
    return response.sendStatus(400);
  }
  return next();
};

module.exports = {
  verifyTokenMiddleware,
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkBodyMiddleware,
  checkRoleMiddleware,
};
