const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/images/users"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  });
  
  const upload = multer({ storage: storage });

  module.exports = upload;
  





const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('email')
	.notEmpty().withMessage('Tienes que escribir un e-mail').bail()
	.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contrasena'),
	body('image').custom((value, { req }) => {
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

//Formulario de Registro
router.get("/register", usersController.register);
//Procesar el Registro
router.post("/register", upload.single('image'), validations, usersController.processRegister);




router.get("/login", usersController.login);
router.post("/login", usersController.loginProcess);



module.exports = router
