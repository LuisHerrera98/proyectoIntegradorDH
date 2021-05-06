// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const carritoController = require('../../controllers/api/carritosFinApiController');

router.get('/carritos/finalizados', carritoController.cantidadCarritos); /* GET - home page */

module.exports = router;
