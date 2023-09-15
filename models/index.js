const foodPreference = require('./foodPreference');
const meals = require('./meals'); // Corrected import name
const userDiet = require('./userDiet');
const userInfo = require('./individual');
const userLogin = require('./User');
const userPlan = require('./userPlan');
const ingredients = require('./ingredients');



foodPreference.belongsTo(userInfo, { foreignKey: 'username_id', onDelete: 'CASCADE'});

//userInfo.hasOne(userLogin, { foreignKey: 'user_id', onDelete: 'CASCADE' });
//userLogin.belongsTo(userInfo, { foreignKey: 'user_id', onDelete: 'CASCADE' });

userInfo.hasOne(userPlan, { foreignKey: 'user_id', onDelete:'CASCADE'});

userDiet.hasMany(meals, { foreignKey: 'diet_id', onDelete: 'CASCADE'});

userPlan.hasMany(userDiet, { foreignKey: 'plan_id', onDelete: 'CASCADE'});

ingredients.hasMany(meals, { foreignKey: 'ingredients_id'});



module.exports = { foodPreference, ingredients, meals, userDiet, userInfo, userLogin, userPlan };


