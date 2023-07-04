const { serviceLogin } = require('../services');

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  const { type, data } = await serviceLogin.loginValidationServer({ email, password });

  return res.status(type).json(data);
};

module.exports = {
  loginValidation,
};