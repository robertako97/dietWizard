const Preference = require('./preference');
const Meals = require('./meals');
const Diet = require('./diet');
const User = require('./user');
const Plan = require('./plan');
const Ingredients = require('./ingredients');
const Diet_meals = require('./diet_meals');
const Individual = require('./individual');

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

Plan.hasMany(Diet, {
  foreignKey: 'plan_id',
  onDelete: 'CASCADE'
});

Diet.belongsTo(Plan, {
  foreignKey: 'plan_id'
});

Diet.hasMany(Diet_meals, {
  foreignKey: 'diet_id',
  onDelete: 'CASCADE'
});

Diet_meals.belongsTo(Diet, {
  foreignKey: 'diet_id'
});

Diet_meals.belongsTo(Meals, {
  foreignKey: 'meal_id'
});

Meals.hasMany(Diet_meals, {
  foreignKey: 'meal_id',
  onDelete: 'CASCADE'
});

Diet_meals.hasMany(Ingredients, {
  foreignKey: 'diet_meals_id',
  onDelete: 'CASCADE'
});

Ingredients.belongsTo(Diet_meals, {
  foreignKey: 'diet_meals_id'
});

module.exports = { Preference, Meals, Ingredients, Diet, User, Plan, Diet_meals, Individual };
