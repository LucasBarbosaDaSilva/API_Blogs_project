const { serviceCategory } = require('../services');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const { type, data } = await serviceCategory.postCategory(name);
  return res.status(type).json(data);
};

module.exports = {
  postCategory,
};