'use strict';

const blogModel = (sequelize, DataTypes) => sequelize.define('books', {
  author: { type: DataTypes.STRING, required: true },
  title: { type: DataTypes.STRING, required: false },
  content: { type: DataTypes.STRING, required: false },
  categories: { type: DataTypes.ENUM('tech', 'education', 'nature', 'world news'), defaultValue: 'tech', allowNull: false},
  time: { type: DataTypes.STRING, allowNull: false},
});

module.exports = blogModel;
