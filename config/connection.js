const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    "todo_app_db",
    "postgres",
    "theskyisbluetoday",
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

module.exports = sequelize;