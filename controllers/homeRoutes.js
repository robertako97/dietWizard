const router = require('express').Router();
const { User, Plan, Individual, Diet, Diet_meals,Ingredients, Meals} = require('../models');
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
  res.render('signup');
});

router.get('/setprofile', withAuth, async (req, res) => {

  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Individual }],
      // include: [{ model: Plan }],
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

router.get('/profile', withAuth, async (req, res) => {

  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
    });
    const user = userData.get({ plain: true });
    const individualData = await Individual.findByPk(req.session.user_id, {
    });
    const individual = individualData.get({ plain: true });
    const planData = await Plan.findOne({
      where: {
        individual_id: req.session.user_id,
      },
    });
     const plan = planData.get({ plain: true });


    res.render('profile', {
      ...user, individual, plan,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/diets', withAuth, async (req, res) => {
  try {

    const mealsData = await Meals.findAll({
    });
    const meals = mealsData.map((meal) => meal.get({ plain: true }));
    const ingredientsData = await Ingredients.findAll({
    });
    const ingredients = ingredientsData.map((ingredient) => ingredient.get({ plain: true }));



    res.render('diet', {
      meals, ingredients,
      logged_in: req.session.logged_in,
    });


  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;