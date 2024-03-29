const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const dbPath = path.join(__dirname,'../database')
//const productos = JSON.parse(fs.readFileSync(path.join(dbPath,'products','products.json'),'utf-8'))
//const usuarios = JSON.parse(fs.readFileSync(path.join(dbPath,'users','users.json'),'utf-8'))

const controller = {
    index: (req, res) =>{
        db.Product.findAll(/*{include: [{association: "P_category"}]}*/)
        .then((product)=>{
            res.render("index",{productos: product})
        })
    },

    about: (req, res) => {
        return res.render('about')
    },

    contact: (req, res) => {
        return res.render('contact')
    }
      
}

module.exports = controller
