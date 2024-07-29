const router = require('express').Router();
const api = require('./api');
const Item = require('../models/Items')
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
const allItems = await Item.findAll();
const sanitizedData = allItems.map((items) => {
  return items.get({plain: true})
})
console.log(allItems)
console.log('===================')
console.log(sanitizedData)

  res.render('items', { sanitizedData });
})


router.get("/auction", (req, res) => {
  res.json('hello!');
})

module.exports = router;