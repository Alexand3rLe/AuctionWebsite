const router = require('express').Router();
const api = require('./api');
const Item = require('../models/Items')


router.use("/api", api);


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