const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'IntiDictionary Server' });
});

module.exports = router;
