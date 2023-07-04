module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  // User.associate = (models) => {
  //   User.hasMany(models.BlogPost, {
  //     foreignKey: 'user_id',
  //     as: 'blog_posts',
  //   });
  // };

  return User;
}