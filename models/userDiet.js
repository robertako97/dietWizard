const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userDiet extends Model {}

userDiet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        dietType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        month_day:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userDiets',
    }
);

module.exports = userDiet;
