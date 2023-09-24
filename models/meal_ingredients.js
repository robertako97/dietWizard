const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Meals_ingredients extends Model {
}

Meals_ingredients.init(
  {
    meals_ingredients_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    meal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meals',
        key: 'meals_id'
      },
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meals_ingredients',
  }
);

module.exports = Meals_ingredients;
