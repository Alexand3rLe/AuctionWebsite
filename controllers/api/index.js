const router = require("express").Router();
const Item = require('../../models/Items');



router.post('/items', async (req, res) => {
  const newItem = Item.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  })

  res.json(newItem);
})


module.exports = router;