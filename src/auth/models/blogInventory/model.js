const blogInventory = (sequelize, DataTypes) => sequelize.define('blogInventory', {
  blogsList: { type: DataTypes.STRING, required: true },
  addBlog: { type: DataTypes.STRING, required: true },
  getBlogs: { type: DataTypes.STRING, required: false },
  searchByAuthors: { type: DataTypes.STRING, required: false },
  searchByCategories: { type: DataTypes.STRING, required: false },
  search: { type: DataTypes.STRING, allowNull: false},
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'blogs',
      key: 'id'
    }
  }
});

module.exports = blogInventory;
