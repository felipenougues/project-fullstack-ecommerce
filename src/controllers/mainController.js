const path = require('path');
const fs = require('fs');
const dbPath = path.join(__dirname,'../database')

const readJSON = (path) => {
    file = fs.readFileSync(path,'utf-8');
    fileParsed = JSON.parse(file);
    return fileParsed;
}

const controller = {
    index: (req,res) => {
        const productos = readJSON(path.join(dbPath,'productos.json'))
        res.render('index', {productos: productos})
    },    
}


module.exports = controller