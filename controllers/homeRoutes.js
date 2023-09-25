const router = require('express').Router();
const { User, Plan, Individual, Meals, Meal_ingredients} = require('../models');

const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('home', {
    logged_in: req.session.logged_in
  });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

router.get('/setprofile', withAuth, async (req, res) => {

  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Individual,
          include: [Plan]
        }
        ],
    });

    const user = userData.get({ plain: true });

    res.render('SetProfile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create-plan', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Individual }]
    });

    const user = userData.get({ plain: true });

    res.render('createPlan', {
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/get-plan', withAuth, async (req, res) => {
  try {

    const individualData = await Individual.findOne( {
      where: { user_id: req.session.user_id }
    });

    const individualId = individualData.individual_id;

    const dietPlan = await Plan.findOne({
      where: { individual_id: individualId },
      include: [{ model: Meals, include: [Meal_ingredients] }]
    });

    if (dietPlan) {
      const plainDietPlan = dietPlan.get({ plain: true });

      res.render('getPlan', {
        userDiet: plainDietPlan,
        logged_in: true
      });
    } else {
      // Handle case where no diet plan is found
      res.status(404).send('No diet plan found');
    }
  } catch (err) {
    console.error('Error occurred: ', err);

    res.status(500).json(err);
  }
});

router.get('/get-plan/:plan_id', withAuth, async (req, res) => {
  try {
    const planId = req.params.plan_id;
    const dietPlan = await Plan.findOne({
      where: { plan_id: planId, },
      include: [{ model: Meals, include: [Meal_ingredients] }]
    });

    if (dietPlan) {
      const plainDietPlan = dietPlan.get({ plain: true });
      console.log(plainDietPlan);
      res.render('getPlan', {
        userDiet: plainDietPlan,
        logged_in: true
      });
    } else {
      // Handle case where no diet plan is found
      res.status(404).send('No diet plan found');
    }
  } catch (error) {
    console.error('Error fetching the diet plan details:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/all-plans', withAuth, async (req, res) => {
  try {
    const individualData = await Individual.findOne( {
      where: { user_id: req.session.user_id }
    });

    const individualId = individualData.individual_id;

    const dietPlans = await Plan.findAll({
      where: {
        individual_id: individualId,
      },
    });

    if (dietPlans) {
      const plainDietPlans = dietPlans.map( ( dietPlan ) => dietPlan.get( {plain:true }));
      // console.log(plainDietPlans);
      res.render('allDietPlans', {
        dietPlans: plainDietPlans,
        logged_in: true
      });
    }


  } catch (error) {
    console.error('Error fetching the diet plans:', error);
    res.status(500).send('Internal Server Error');

  }
});


module.exports = router;