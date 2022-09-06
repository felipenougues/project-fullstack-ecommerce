
const { validationResult } = require('express-validator');
const User = require("../../models/User.js");
const bcryptjs = require("bcryptjs");

const db = require('../database/models')

const controller = {
    register: (req,res) => res.render('users/register'),

    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);

		db.User.findOne({where:{
			email: req.body.email
		}})
		.then((resultado)=>{
			if(resultValidation.errors.length > 0){
				return res.render('users/register', {
					errors: resultValidation.mapped(),
					oldData: req.body
				});
			}
			else if (resultado) {
				return res.render('users/register', {
					errors: {
						email: {
							msg: 'Este email ya está registrado'
						}
					},
					oldData: req.body
				});
			}
			else{
				db.User.create({
					...req.body,
					password: bcryptjs.hashSync(req.body.password, 10),
					Image: req.file.filename,
				})
				return res.redirect('/users/login')
			}

		})

    },

    login: (req,res) => res.render('users/login'),

	loginProcess: (req,res) => {
		db.User.findOne({where:{
			email: req.body.email
		}})
		.then((resultado)=>{
			if(resultado) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, resultado.password);
				if (isOkThePassword) {
					delete resultado.password;
					req.session.userLogged = resultado;
	
					if(req.body.remember_user) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
					}
	
					return res.redirect('/users/profile');
				}
			}
			return res.render('users/login', {
				errors: {msg: 'Las credenciales son inválidas'}
				});
		})
    },
	profile: (req,res) => {
		db.User.findAll()
		.then(users => {return res.json(users)})
	}
}

module.exports = controller;
/*
    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}


        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('/users/login')
    },
	loginProcess: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/users/profile');
			}
        }
		return res.render('users/login', {
			errors: {msg: 'Las credenciales son inválidas'}
			});
    }*/