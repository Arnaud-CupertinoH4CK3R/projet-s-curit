const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const password = req.query.password;
  console.log('Tentative de connexion avec :', password); // mauvaise pratique
  if (password === process.env.ADMIN_PASSWORD) {
    res.send('Bienvenue dans l’espace admin');
  } else {
    res.status(403).send('Accès refusé');
  }
});

module.exports = router;