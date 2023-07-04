const { serviceBlogPost } = require('../services');

const getAllPost = async (_req, res) => {
  const result = await serviceBlogPost.getAll();
  return res.status(200).json(result);
};

module.exports = {
  getAllPost,
};