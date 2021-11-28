const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const jwtKey = process.env.JWT_KEY;
const jwtAlgorithm = process.env.JWT_ALGORITHM;

const signToken = (payload) => jwt.sign(payload, jwtKey, { algorithm: jwtAlgorithm });

const verifyToken = (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, jwtKey, { algorithm: jwtAlgorithm });
  } catch (err) {
    decoded = null;
  }
  return decoded;
};

module.exports = {
  signToken,
  verifyToken,
};
