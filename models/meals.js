const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class meals extends Model {}

meals.init(
    {
        id: {
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

module.exports = meals;
