const express = require('express');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

/**
 * @returns {import('express').Express}
 */
function createApp() {
  const app = express();

  app.use(pokeneaRoutes);

  return app;
}

module.exports = createApp;