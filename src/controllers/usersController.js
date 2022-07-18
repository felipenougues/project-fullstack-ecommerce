
const { validationResult } = require('express-validator');


const controller = {
    register: (req,res) => res.render('users/register'),
    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);
        /*return res.send(resultValidation.mapped())*/
        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        return res.send('ok,las validaciones pasaron sin errores')
    },

    login: (req,res) => res.render('users/login'),
}

module.exports = controller