const foodPreference = require('./foodPreference');
const meals = require('./meals');
const userDiet = require('./userDiet');
const User = require('./User');
const userPlan = require('./userPlan');
const ingredients = require('./ingredients');

foodPreference.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
User.hasOne(userPlan, { foreignKey: 'user_id', onDelete: 'CASCADE' });

userDiet.belongsTo(userPlan, { foreignKey: 'plan_id', onDelete: 'CASCADE' });
userPlan.hasMany(userDiet, { foreignKey: 'plan_id', onDelete: 'CASCADE' });

userDiet.hasMany(meals, { foreignKey: 'diet_id', onDelete: 'CASCADE' });
meals.belongsTo(userDiet, { foreignKey: 'diet_id' });

meals.belongsTo(ingredients, { foreignKey: 'ingredients_id' });
ingredients.hasMany(meals, { foreignKey: 'ingredients_id' });

module.exports = { foodPreference, ingredients, meals, userDiet, User, userPlan };
