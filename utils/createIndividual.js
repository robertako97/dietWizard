const axios = require('axios');
const { Individual} = require('../models');
require('dotenv').config();

const createIndividual = async (userData) => {
  let apiRequestBody = {
    "height": userData.height,
    "weight": userData.weight,
    "dateOfBirth": userData.birthdate,
    "sex": userData.gender,
    "activityLevel": userData.activityLevel
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://bespoke-diet-generator.p.rapidapi.com/user',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY
    },
    data: apiRequestBody
  };

  try {
    const response = await axios.request(config);
    const apiData = response.data;

    // Merging user provided data, API response, and any default values or calculations
    const individualData = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      birthday: userData.birthdate,
      weight: userData.weight,
      height: userData.height,
      sex: userData.gender,
      activity: userData.activityLevel,
      individual_id: apiData.id,
      weight_goal: userData.weightGoal,
      type_of_diet: userData.typeOfDiet,
      user_id: userData.user_id
    };

    // Save the consolidated data into the Individual model
    const individual = await Individual.create(individualData);
    console.log("Individual data saved!", individual);
  } catch (error) {
    console.log("Error saving individual data:", error);
  }
};

module.exports = createIndividual;
