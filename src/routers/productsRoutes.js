const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload = require("../middlewares/multerProducts");


//*** GET SELECTED PRODUCTS ***//
router.get("/productCart", productsController.productCart)

//*** GET ALL PRODUCTS ***//
router.get("/productList", productsController.productList)


//*** GET ONE PRODUCT ***//
router.get("/productDetail/:id", productsController.productDetail)


//*** CREATE ONE PRODUCT ***//

router.get("/productCreate", productsController.productCreate)
router.post("/productCreate", upload.single("productImage"), productsController.productStore) //agrego multer a esta route

//*** EDIT ONE PRODUCT ***//

router.get("/productEdit/:id", productsController.productEdit)
router.put("/productEdit/:id", productsController.productUpdate)

//*** DELETE ONE PRODUCT ***//

router.delete("/productDetail/:id", productsController.productDestroy)



module.exports = router
