const router = require('express').Router();
const Item = require('../models/Items');
const User = require('../models/User');

// rauction page with items
router.get('/', async (req, res) => {
  try {
    const allItems = await Item.findAll();
    res.render('auction', { items: allItems.map(item => item.get({ plain: true })) });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  login page
router.get('/login', (req, res) => {
  res.render('login');
});

// signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Handle user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && user.password === password) {
      res.redirect('/');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Handle user signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.redirect('/login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
