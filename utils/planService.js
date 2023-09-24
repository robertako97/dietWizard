const axios = require('axios');
const planRepository = require('./planRepository');
require('dotenv').config();

async function makeApiCall(data) {
  const { dietType, weightGoal, dietDuration, individualId } = data;

  const apiData = {
    dietType: dietType,
    weightGoal: weightGoal,
    dietDuration: dietDuration
  };
  console.log(apiData);
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

  try {
    const response = await axios(config);
    return response.data; // Assuming the data you need is in the data property
  } catch (error) {
    throw error;
  }
}

async function createPlan(data) {
  const apiResponse = await makeApiCall(data);
  console.log(apiResponse);
  return await planRepository.savePlan(apiResponse, data);
}

module.exports = {
  createPlan
};
