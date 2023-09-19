const foodPreference = require('./foodPreference');
const meals = require('./meals'); // Corrected import name
const userDiet = require('./userDiet');
const User = require('./User');
const userPlan = require('./userPlan');
const ingredients = require('./ingredients');



foodPreference.belongsTo(User, { foreignKey: 'username_id', onDelete: 'CASCADE'});


User.hasOne(userPlan, { foreignKey: 'user_id', onDelete:'CASCADE'});

userDiet.hasMany(meals, { foreignKey: 'diet_id', onDelete: 'CASCADE'});

userPlan.hasMany(userDiet, { foreignKey: 'plan_id', onDelete: 'CASCADE'});

ingredients.hasMany(meals, { foreignKey: 'ingredients_id'});


module.exports = { foodPreference, ingredients, meals, userDiet, User, userPlan };


