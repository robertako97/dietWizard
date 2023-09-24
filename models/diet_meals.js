const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Diet_meals extends Model {
}

Diet_meals.init(
  {
    diet_meals_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    diet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'diet',
        key: 'diet_id'
      },
    },
    meals_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meals',
        key: 'meals_id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'diet_meals',
  }
);

module.exports = Diet_meals;
