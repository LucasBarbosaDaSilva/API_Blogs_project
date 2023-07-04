const { Category } = require('../models');

const postCategory = async (name) => {
  const category = await Category.create({ name });
  return { type: 201, data: category };
};

module.exports = {
  postCategory,
};