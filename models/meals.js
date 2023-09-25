const {Model, DataTypes} = require('sequelize');
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
    meal_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plan',
        key: 'plan_id'
      },
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
