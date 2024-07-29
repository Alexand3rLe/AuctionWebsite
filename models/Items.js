const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model {}

Items.init({

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  image: {
    type: DataTypes.STRING, // URL of the image
    allowNull: true
  }

}, {
  sequelize, 
  freezeTableName: true,
  underscored: true,
  modelName: 'items'
});

module.exports = Items;
