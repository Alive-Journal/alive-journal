'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const blogModel = require('./blog/model')
const Collection = require('./data-collection');
const userModel = require('./readers');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelizeDataBase = new Sequelize(DATABASE_URL);
const blogs = blogModel(sequelizeDataBase, DataTypes);

module.exports = {
  db: sequelizeDataBase,
  blogs: new Collection(blogs),

  readers: userModel(sequelizeDataBase, DataTypes),
};
