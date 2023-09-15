const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userInfo extends Model {}

userInfo.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        height:{
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        weight:{
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        sex:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userInfo',
    }
);

module.exports = userInfo;
