const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { type: 200, data: categories };
};

const postCategory = async (name) => {
  const category = await Category.create({ name });
  return { type: 201, data: category };
};

module.exports = {
  postCategory,
  getAllCategories,
};