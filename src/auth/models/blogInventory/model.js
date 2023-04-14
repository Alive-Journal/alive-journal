'use strict';

const blogInventory = (sequelize, DataTypes) => sequelize.define('blogs', {
  blogsList: { type: DataTypes.STRING, required: true },
  addBlog: { type: DataTypes.STRING, required: true },
  getBlogs: { type: DataTypes.STRING, required: false },
  searchByAuthors: { type: DataTypes.STRING, required: false },
  searchByCategories: { type: DataTypes.STRING, required: false },
  search: { type: DataTypes.STRING, allowNull: false},
});

module.exports = blogInventory;
