const { Category, BlogPost, User } = require('../models');

const getAll = async () => {
  const categories = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return categories;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const deletePostById = async ({ id, userId }) => {
  const post = await BlogPost.findByPk(id);

  if (!post) {
    return { type: 404, data: { message: 'Post does not exist' } };
  } 
  if (post.userId !== userId) {
    return { type: 401, data: { message: 'Unauthorized user' } };
  } 
  await BlogPost.destroy({ where: { id } });

  const deletedPost = await BlogPost.findByPk(id);

  return { type: 204, data: deletedPost };
};

module.exports = {
  getAll,
  getPostById,
  deletePostById,
};