const { serviceUser } = require('../services');

const getAllUsers = async (_req, res) => {
  try {
    const users = await serviceUser.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
const { type, data } = await serviceUser.postUser({ displayName, email, password, image });
  return res.status(type).json(data);
};

module.exports = {
  postUser,
  getAllUsers,
};