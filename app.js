
require('dotenv').config();
const express = require('express');
const path = require('path');




const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auditdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);

// Pas de gestion centralisée des erreurs

app.listen(3000, () => {
  console.log('Serveur en ligne sur http://localhost:3000');
});