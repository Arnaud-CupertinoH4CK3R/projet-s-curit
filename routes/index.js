const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const name = req.query.name || 'inconnu';
  res.render('index', { name });
});

module.exports = router;