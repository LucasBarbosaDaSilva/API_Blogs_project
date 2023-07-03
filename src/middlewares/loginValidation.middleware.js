const validationEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validationEmail,
  validatePassword,
};