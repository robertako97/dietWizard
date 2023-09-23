const router = require('express').Router();
const { User } = require('../../models');
const createIndividual = require('../../utils/createIndividual');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    const validPassword = await userData.checkPassword(req.body.password);

    if (!userData || !validPassword) {
      res
        .status(400)
        .json( { message: 'Incorrect email or password! '});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;


      res.json( { user: userData, message: 'You are now logged in!' });
    })


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
    // Validate the password
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }
    // Create a new user with the provided data
    const userData = await User.create({
      username: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userData);
    // Save user session data
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      // Respond with JSON data of the newly created user
      res.status(200).json(userData);
    });
  } catch (err) {
    // Handle any errors during user creation
    res.status(400).json(err);
  }
});

router.post('/individual', async (req, res) => {
  try {
    const user_id = req.session.user_id;
    const userData = req.body;
    userData.user_id = user_id;
    console.log(userData);
    await createIndividual(userData);

    // Respond back to the client indicating success
    res.json({ message: 'Individual data successfully saved!' });
  } catch (error) {
    console.error("Error in the createOrUpdate route:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
