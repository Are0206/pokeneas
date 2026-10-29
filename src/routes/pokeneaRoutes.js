const express = require('express');
const routePaths = require('../config/routePaths');
const pokeneaApiController = require('../controllers/pokeneaApiController');

const router = express.Router();

router.get(routePaths.pokeneaApiShow, pokeneaApiController.show);

module.exports = router;