const path = require('path')
const fs = require('fs');
const dbPath = path.join(__dirname,'../database')
const productos = JSON.parse(fs.readFileSync(path.join(dbPath,'products','products.json'),'utf-8'))


const controller = {
    productCart: (req,res) => res.render('products/productCart'),

    productList: (req,res) => {

        res.render('products/productList', {productos: productos})
    },  

    productDetail: (req,res) => {
        const productoDetallado = productos.find((producto) => producto.id == req.params.id);
        res.render('products/productDetail', {producto: productoDetallado})
    },

    // CREATE
    productCreate: (req,res) => {
        
        return res.render("products/productCreate");
        
    },
    productStore: (req, res) => {
		
		return res.send("El producto fue creado exitosamente")
	},

    // EDIT
	productEdit: (req, res) => {
		
		const id = req.params.id;
		const product = productos.find(product => product.id == id);
		return res.render("products/productEdit", { product });
	},
    productUpdate: (req, res) => {
		
		return res.send("El producto fue editado exitosamente");
	},

    // DELETE
	productDestroy : (req, res) => {
		
		return res.send("El producto fue borrado");
	}
};



module.exports = controller