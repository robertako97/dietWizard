const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Individual extends Model {}

Individual.init({
  individual_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  sex: {
  type: DataTypes.STRING,
  allowNull: false
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'user_id'
    }
  },
},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'individual',
  });

module.exports = Individual;
