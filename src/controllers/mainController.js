const path = require('path');
const fs = require('fs');
const dbPath = path.join(__dirname,'../database')
const productos = JSON.parse(fs.readFileSync(path.join(dbPath,'products','products.json'),'utf-8'))


const controller = {
    index: (req,res) => {

        res.render('index', {productos: productos})
    },    
}


module.exports = controller