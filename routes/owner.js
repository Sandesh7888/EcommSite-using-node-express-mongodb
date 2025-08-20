const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Owner Home Page');
});

module.exports = router;
