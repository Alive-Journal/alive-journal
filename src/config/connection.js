// Import dependencies
const Sequelize = require("sequelize");
require("dotenv").config();

// Configure Sequelize instance with environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// Export the configured Sequelize instance
module.exports = sequelize;
