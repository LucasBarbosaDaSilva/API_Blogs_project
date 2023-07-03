const { serviceLogin } = require('../services/login.service');

const loginValidate = async (req, res) => {
  const { email, password } = req.body;
  const { type, data } = await serviceLogin.loginValidate({ email, password });

  return res.status(type).json(data);
};

module.exports = {
  loginValidate,
};