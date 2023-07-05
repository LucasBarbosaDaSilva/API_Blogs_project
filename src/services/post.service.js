const { verifyToken } = require('../helpers/jasonWebToken');
const { Category, BlogPost, User, PostCategory } = require('../models');

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

const getUser = async (token) => {
  const verify = verifyToken(token);
  const { email } = verify;
  const user = await User.findOne({ where: email });
  return user;
};

const postCategory = async (categoryIds, postCreated) => {
  await Promise.all(categoryIds.map((category) => 
    PostCategory.create({ categoryId: category, postId: postCreated.id })));
};

const creatPost = async (title, content, token, categoryIds) => {
  const postsWithId = await Promise.all(categoryIds.map((id) => Category.findByPk(id)));
  if (postsWithId.includes(null)) {
    return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
  }
  const user = await getUser(token);
  const userId = user.id;
  const date = new Date();
  const postCreated = await BlogPost
  .create({ title, content, userId, published: date, updated: date });
  postCategory(categoryIds, postCreated);
  return { type: 201, message: postCreated };
};

const deletePostById = async ({ id, userId }) => {
  const post = await BlogPost.findByPk(id);

  if (!post) {
    return { type: 404, data: { message: 'Post does not exist' } };
  } 
  if (post.dataValues.userId !== userId) {
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
  creatPost,
};