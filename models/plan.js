const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Plan extends Model {
}

Plan.init(
  {
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    diet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diet_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight_goal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    individual_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'individual',
        key: 'individual_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plan',
  }
);

module.exports = Plan;
