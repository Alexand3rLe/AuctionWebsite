const router = require('express').Router();
const api = require('./api');
// const Task = require('../models/Task');

router.use("/api", api);

// router.get('/', async (req, res) => {
//   const allTasks = await Task.findAll();
//   const sanitizedData = allTasks.map((task) => {
//     return task.get({ plain: true});
//   })
//   console.log(allTasks);
//   console.log('=========================')
//   console.log(sanitizedData);
//   // const testData = {
//   //   name: 'test work',
//   //   description: 'work to do',
//   //   status: 'in progress'
//   // };
//   res.render('todo', { sanitizedData });
// })


router.get('/', async (req, res) => {
    try {
      const items = await Item.findAll();
      res.render('index', { items });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  router.get('/auction', (req, res) => {
    res.render('auction');
  });
  
module.exports = router;