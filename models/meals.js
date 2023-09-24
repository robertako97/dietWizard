const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Meals extends Model {
}

Meals.init(
  {
    meals_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    meal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meals',
  }
);

module.exports = Meals;
