'use strict';

const blogInventoryModel = (sequelize, DataTypes) => sequelize.define('blogInventory', {
  blogs: { type: DataTypes.STRING, required: true },
  addBlog: { type: DataTypes.STRING, required: true },
  getBlogs: { type: DataTypes.STRING, required: true },
  searchByAuthor: { type: DataTypes.STRING, required: true },
  searchByCategories: { type: DataTypes.STRING, required: true },
  search: { type: DataTypes.STRING, required: true },
});

module.exports = blogInventoryModel;
