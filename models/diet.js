const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Diet extends Model {
}

Diet.init(
  {
    diet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plan',
        key: 'plan_id'
      }
    },
    month_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'diet',
  }
);

module.exports = Diet;
