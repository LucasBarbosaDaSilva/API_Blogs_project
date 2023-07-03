const jwt = require('jsonwebtoken');

const secretToken = process.env.JWT_SECRET || 'secretToken';

const jwtConfig = {
  expiresIn: '7d',
};

const createToken = (payload) => {
  jwt.sign(payload, secretToken, jwtConfig);
};

const verifyToken = (token) => {
  jwt.verify(token, secretToken);
};

module.exports = {
  createToken,
  verifyToken,
};