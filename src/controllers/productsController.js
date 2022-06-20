const path = require('path')
const fs = require('fs');
const dbPath = path.join(__dirname,'../database')
const productos = JSON.parse(fs.readFileSync(path.join(dbPath,'products','products.json'),'utf-8'))


const controller = {
    productCart: (req,res) => res.render('products/productCart'),

    productDetail: (req,res) => {
        const productoDetallado = productos.find((producto) => producto.id == req.params.id);
        res.render('products/productDetail', {producto: productoDetallado})
    },
}



module.exports = controller