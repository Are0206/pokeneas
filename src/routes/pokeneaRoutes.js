const express = require('express');
const routePaths = require('../config/routePaths');
const pokeneaApiController = require('../controllers/pokeneaApiController');
const pokeneaController = require('../controllers/pokeneaController');

const router = express.Router();

router.get(routePaths.pokeneaApiShow, pokeneaApiController.show);

router.get(routePaths.pokeneaShow, pokeneaController.show)

module.exports = router;