const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ingredients extends Model {}

ingredients.init(
    {
        ingredients_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        diet_meals_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'diet_meals',
                key: 'diet_meals_id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredients',
    }
);

module.exports = ingredients;
