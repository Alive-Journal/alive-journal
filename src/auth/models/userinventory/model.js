'use strict';

const userInventoryModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
  users: { type: DataTypes.STRING, required: true },
  addUser: { type: DataTypes.STRING, required: true },
  getUser: { type: DataTypes.STRING, required: true },
  searchUser: { type: DataTypes.STRING, allowNull: false},
  authenticate: { type: DataTypes.STRING, allowNull: false },
});

module.exports = userInventoryModel;
