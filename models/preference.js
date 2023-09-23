const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Preference extends Model {
}

Preference.init(
  {
    preference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient: {
      type: DataTypes.STRING,
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
    modelName: 'food_preference',
  }
);

module.exports = Preference;
