const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

/**
 * @returns {import('express').Express}
 */
function createApp() {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));

  app.use(pokeneaRoutes);

  return app;
}

module.exports = createApp;