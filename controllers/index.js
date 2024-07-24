const router = require('express').Router();
const api = require('./api');


router.use("/api",api);

router.get("/auction", (req, res) => {
    res.json('hello world!');
})

module.exports = router; 