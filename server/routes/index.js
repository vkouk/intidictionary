const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'IntiDirectory Server' });
});

module.exports = router;
