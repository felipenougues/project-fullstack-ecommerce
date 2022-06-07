const path = require('path')
const fs = require('fs');
const dbPath = path.join(__dirname,'../database')

const readJSON = (path) => {
    file = fs.readFileSync(path,'utf-8');
    fileParsed = JSON.parse(file);
    return fileParsed;
}

const controller = {
    productCart: (req,res) => res.render('products/productCart'),
    productDetail: (req,res) => {
        const id = req.params.id;
        const productos = readJSON(path.join(dbPath,'productos.json'))
        const productoDetallado = productos.find((producto) => producto.id == id);
        res.render('products/productDetail', {producto: productoDetallado})
    },
}



module.exports = controller