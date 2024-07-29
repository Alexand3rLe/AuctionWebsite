const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.AUCTION_DB,
  process.env.AUCTION_USER,
  process.env.AUCTION_PW,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;

