const { serviceCategory } = require('../services');

const getAllCategories = async (_req, res) => {
  const { type, data } = await serviceCategory.getAllCategories();
  return res.status(type).json(data);
};

const postCategory = async (req, res) => {
  const { name } = req.body;
  const { type, data } = await serviceCategory.postCategory(name);
  return res.status(type).json(data);
};

module.exports = {
  postCategory,
  getAllCategories,
};