const userInventoryModel = (sequelize, DataTypes) => sequelize.define('userInventory', {
  users: { type: DataTypes.STRING, required: true },
  addUser: { type: DataTypes.STRING, required: true },
  getUser: { type: DataTypes.STRING, required: true },
  searchUser: { type: DataTypes.STRING, allowNull: false},
  authenticate: { type: DataTypes.STRING, allowNull: false },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  }
});

module.exports = userInventoryModel;
