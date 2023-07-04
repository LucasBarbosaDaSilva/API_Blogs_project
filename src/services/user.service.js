const { User } = require('../models');
const { createToken } = require('../helpers/jasonWebToken');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUser = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });

  return user;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
    });

  return user;
};

const postUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (user) {
    return { type: 409, data: { message: 'User already registered' },
    };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const payload = {
    id: newUser.id,
    displayName: newUser.displayName,
  };

  const token = createToken(payload);

  return {
    type: 201,
    data: { token },
  };
  };

module.exports = {
  postUser,
  getAllUsers,
  getUser,
  getUserById,
};