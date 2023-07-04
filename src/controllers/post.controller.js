const { serviceBlogPost } = require('../services');

const getAllPost = async (_req, res) => {
  const result = await serviceBlogPost.getAll();
  return res.status(200).json(result);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const result = await serviceBlogPost.getPostById(id);
  if (!result) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(result);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
const { type, data } = await serviceBlogPost.deletePostById({ id, userId });

return res.status(type).json(data);
};

module.exports = {
  getAllPost,
  getPostById,
  deletePostById,
};