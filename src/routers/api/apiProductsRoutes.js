const express = require('express')
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController')

// paginar como http://localhost:3030/api/products/?limit=10&offset=10
// consultar como http://localhost:3030/api/products/
router.get("/", apiProductsController.list)
// consultar como http://localhost:3030/api/products/{id}
router.get("/:id", apiProductsController.detail)

module.exports = router