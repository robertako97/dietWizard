const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class foodPreference extends Model {}

foodPreference.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'food_preference',
    }
);

module.exports = foodPreference;
