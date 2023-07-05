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

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;

  const result = await serviceBlogPost.creatPost(title, content, token, categoryIds);
  const { type, message } = result;
  return res.status(type).json(message);
};

const upDatePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const { title, content } = req.body;

  const { type, data } = await serviceBlogPost
    .upDatePost({ id, title, content, userId });

  return res.status(type).json(data);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
const { type, message } = await serviceBlogPost.deletePostById({ id, userId });

return res.status(type).json(message);
};

module.exports = {
  getAllPost,
  getPostById,
  deletePostById,
  createPost,
  upDatePost,
};