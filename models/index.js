const Preference = require('./preference');
const Meals = require('./meals');
const User = require('./user');
const Plan = require('./plan');
const Individual = require('./individual');
const Meal_ingredients = require('./meal_ingredients');

// Setup relationships
User.hasOne(Individual, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Individual.belongsTo(User, {
  foreignKey: 'user_id'
});

Individual.hasMany(Preference, {
  foreignKey: 'individual_id',
  onDelete: 'CASCADE'
});

Individual.hasMany(Plan, {
  foreignKey: 'individual_id',
  onDelete: 'CASCADE'
});

Preference.belongsTo(Individual, {
  foreignKey: 'individual_id'
});

Plan.belongsTo(Individual, {
  foreignKey: 'individual_id'
});

Plan.hasMany(Meals, {
  foreignKey: 'plan_id',
  onDelete: 'CASCADE'
});

Meals.belongsTo(Plan, {
  foreignKey: 'plan_id'
});


Meals.hasMany(Meal_ingredients, {
  foreignKey: 'meal_id',
  onDelete: 'CASCADE'
});

Meal_ingredients.belongsTo(Meals, {
  foreignKey: 'meal_id'
});

module.exports = { Preference, Meals, Meal_ingredients, User, Plan, Individual };
