const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userPlan extends Model {}

userPlan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        plan_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        initial_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        weight_goal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        activity_level: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userPlan',
    }
);

module.exports = userPlan;
