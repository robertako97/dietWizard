const router = require('express').Router();
const { User, Plan, Individual, Diet, Diet_meals} = require('../models');
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

router.get('/profile', withAuth, async (req, res) => {

  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Individual }],
      // include: [{ model: Plan }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/diets', withAuth, async (req, res) => {
  try {

    const dietData = await Diet.findAll({
      include: Diet_meals,

    });


    const diets = dietData.map((diet) => diet.get({ plain: true }));


    res.render('diet', {
      diets,
      logged_in: req.session.logged_in,
    });


  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;