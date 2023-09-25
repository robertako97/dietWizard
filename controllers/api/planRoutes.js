const express = require('express');
const router = express.Router()
// const planService = require('../../utils/planService');
const sequelize = require('../../config/connection');
const axios = require('axios');
const { Plan, Meals, Meal_ingredients } = require('../../models');

require('dotenv').config();

router.post('/create', async (req, res) => {
  // Extract the data from the request body
  const { dietType, weightGoal, dietDuration, individualId } = req.body;

  // Prepare data for the third-party API
  const apiData = {
    dietType: dietType,
    weightGoal: weightGoal,
    dietDuration: dietDuration
  };

  // Config for Axios request
  const config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `https://bespoke-diet-generator.p.rapidapi.com/user/${individualId}/diet`,
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY
    },
    data: apiData
  };
  const transaction = await sequelize.transaction();

  try {
    // PUT request to the third-party API
    const apiResponse = await axios(config);
    // The response from the third-party API
    const dietPlan = apiResponse.data;

    // Use the Plan model to save the diet plan data to your database
    const savedPlan = await Plan.create({
      diet_type: dietType,
      diet_duration: dietDuration,
      weight_goal: weightGoal,
      individual_id: individualId
    }, { transaction });

    const dailyPlans = dietPlan.dailyPlan;

    for (let daily of dailyPlans) {
      const mealsData = daily.meals;

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
    }


    await transaction.commit();
    res.status(201).json(savedPlan);
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ message: 'Error creating the plan.' });
  }
});


/*
router.post('/create', async (req, res) => {
  try {
    const savedPlan = await planService.createPlan(req.body);
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating the plan.' });
  }
});
*/

module.exports = router;
