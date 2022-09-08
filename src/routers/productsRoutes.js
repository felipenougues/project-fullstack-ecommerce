const express = require('express');
const router = express.Router();
const path = require('path')
const productsController = require("../controllers/productsController");
const upload = require("../middlewares/multerProducts");
const { body } = require('express-validator');

let validationsProducts =[
    body('name').notEmpty().isLength({min:5}).withMessage('Tienes que escribir un nombre'),
    body('price').notEmpty().withMessage('No puede estar sin precio'),
    body('discount').notEmpty().withMessage('pon el descuento aún así sea de 0'),
    body('description').notEmpty().isLength({min:20}).withMessage('Tienes que escribir una descripción'),
    body('productImage').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if(!file){
			throw new Error ('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if(!acceptedExtensions.includes(fileExtension)){
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
			}
		}
		
		return true
	})
]

//*** GET SELECTED PRODUCTS ***//
router.get("/productCart", productsController.productCart)

//*** GET ALL PRODUCTS ***//
router.get("/productList", productsController.productList)
router.get("/productSearch", productsController.productSearch)


//*** GET ONE PRODUCT ***//
router.get("/productDetail/:id", productsController.productDetail)



//*** CREATE ONE PRODUCT ***//

router.get("/productCreate", productsController.productCreate)
//router.post("/productCreate", productsController.create)
router.post("/productCreate", upload.single("productImage"), validationsProducts, productsController.productStore) //agrego multer a esta route

//*** EDIT ONE PRODUCT ***//

router.get("/productEdit/:id", productsController.productEdit)
router.put("/productEdit/:id", productsController.productUpdate)

//*** DELETE ONE PRODUCT ***//

router.delete("/productDetail/:id", productsController.productDestroy)



module.exports = router
