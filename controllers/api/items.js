const router = require('express').Router();
const Item = require('../../models/Items');

router.get('/items', async (req, res) => {
  try {
    const allItems = await Item.findAll();
    res.status(200).json(allItems);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/items', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
