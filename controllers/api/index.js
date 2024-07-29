const router = require("express").Router();
const Item = require('../../models/Items');

router.get('/items', async (req, res) => {
  try {
    const allItems = await Item.findAll();

    res.status(200).json(allItems);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/items', async (req, res) => {
  const newItem = Item.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  })

  res.json(newItem);
})


module.exports = router;