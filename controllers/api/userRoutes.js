const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});



router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // Customize the error message for email not found
      return res
          .status(400)
          .json({ message: 'Email not found. Please check your email and try again' });

    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      return;
    }





    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });




    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  try {
    // Create a new user with the provided data
    const userData = await User.bulkCreate({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      lastname: req.body.lastname,
      username: req.body.username,
      age: req.body.age,
      gender: req.body.gender,
      weight: req.body.weight,
      height: req.body.height,
      weightgoal: req.body.weightgoal,
      activitylevel: req.body.activitylevel,
      typeofdiet: req.body.typeofdiet,

    });

    // Save user session data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with JSON data of the newly created user
      res.status(200).json(userData);
    });
  } catch (err) {
    // Handle any errors during user creation
    res.status(400).json(err);
  }
});

module.exports = router;
