const { validationResult } = require('express-validator');
const db = require('../database/models')
const bcryptjs = require("bcryptjs");


const controller = {
    register: (req,res) => res.render('users/register'),

    registerProcess: (req, res) =>{
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
					image: req.file.filename,
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
		.then((user)=>{

			let isOkThePassword = user === null ? false : bcryptjs.compareSync(req.body.password, user.password);

			if (isOkThePassword) {
				delete user.password;
				req.session.userLogged = user;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60, path: '/', domain: req.hostname })
				}

				return res.redirect('/users/profile');

			}
			return res.render('users/login', {
				errors: {msg: 'Las credenciales son inválidas'}
				});
		})
    },
	profile: (req,res) => {
		return res.render('users/profile', {user: req.session.userLogged})
	},

	logout: (req, res) =>{
		res.clearCookie('userEmail', {path: '/', domain: req.hostname});
	/* 	res.cookie('userEmail', "", { expires: new Date(), path: '/', domain: req.hostname, overwrite: true }) */	
		console.log(req.cookies.userEmail);
		req.session.destroy();
		return res.redirect('/')
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