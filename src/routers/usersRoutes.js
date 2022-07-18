const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const upload = require('../middlewares/multer');
const path = require('path');

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


module.exports = router
