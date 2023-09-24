const { Plan, Meals, Meal_ingredients } = require("../models");
const sequelize = require('../config/connection');

async function savePlan(apiResponse, data) {
  const transaction = await sequelize.transaction();
  try {
    const savedPlan = await Plan.create(data, { transaction });

    const mealsData = apiResponse.meals;
    console.log(mealsData);
    for (let meal of mealsData) {
      const savedMeal = await Meals.create({
        meal_type: meal.type,
        plan_id: savedPlan.plan_id
      }, { transaction });

      for (let ingredient of meal.ingredients) {
        await Meal_ingredients.create({
          ingredient: ingredient.name,
          quantity: ingredient.quantity,
          meal_id: savedMeal.meals_id
        }, { transaction });
      }
    }

    await transaction.commit();
    console.log(savedPlan);
    return savedPlan;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

module.exports = {
  savePlan
};
