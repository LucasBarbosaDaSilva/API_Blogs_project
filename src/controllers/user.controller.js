const { serviceUser } = require('../services');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
const { type, data } = await serviceUser.postUser({ displayName, email, password, image });
  return res.status(type).json(data);
};

module.exports = {
  postUser,
};