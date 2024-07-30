const router = require('express').Router();
const api = require('./api');
const home = require('./home');


router.use('/', home);
router.use("/api", api);


  router.get('/auction', (req, res) => {
    res.render('auction');
  });
  
module.exports = router;