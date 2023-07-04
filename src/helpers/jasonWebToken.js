const jwt = require('jsonwebtoken');

const tokenSecret = process.env.JWT_SECRET || 'tokenSecret';

const jwtConfig = {
  expiresIn: '7d',
};

const createToken = (payload) => 
  jwt.sign(payload, tokenSecret, jwtConfig);

const verifyToken = (token) => 
  jwt.verify(token, tokenSecret);

module.exports = {
  createToken,
  verifyToken,
};