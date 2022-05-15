const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { Types } = require('mongoose');
const { withAmountSchema } = require('../validationShemas');

const { ObjectId } = Types;

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

const setHeadersMiddleware = (request, response, next) => {
  response.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  response.header('Expires', '-1');
  response.header('Pragma', 'no-cache');
  return next();
};

const userFiltersMiddleware = async (request, response, next) => {
  try {
    await withAmountSchema.validate(request.query);
    const { amount, roleId, isActive, ...queryFilters } = request.query;
    const aggregateFilter = {};
    Object.keys(queryFilters).forEach((key) => {
      if (queryFilters[key]) {
        aggregateFilter[key] = queryFilters[key];
      }
    });
    if (roleId) {
      aggregateFilter.roleId = ObjectId(roleId);
    }
    if (isActive) {
      aggregateFilter.isActive = isActive === 'true';
    }
    request.filter = aggregateFilter;
    request.amount = +amount;
    return next();
  } catch {
    return response.sendStatus(422);
  }
};

module.exports = {
  verifyTokenMiddleware,
  checkTokenMiddleware,
  checkActiveMiddleware,
  checkBodyMiddleware,
  checkRoleMiddleware,
  setHeadersMiddleware,
  userFiltersMiddleware,
};
