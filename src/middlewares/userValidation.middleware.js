const { User } = require('../models/User');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be 6 characters long' });
  }

  next();
};

const validateUser = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ 
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
};
