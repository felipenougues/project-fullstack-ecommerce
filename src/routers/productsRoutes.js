const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get("/productCart", productsController.productCart)
router.get("/productDetail/:id", productsController.productDetail)


module.exports = router