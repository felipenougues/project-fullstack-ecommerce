const path = require('path')
const fs = require('fs');
const dbPath = path.join(__dirname,'../database/products/products.json')

const db = require('../database/models')



const readJsonFile = (path) =>{
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

const controller = {
    productCart: (req,res) => res.render('products/productCart'),

    productList: (req,res) => {
		db.Product.findAll()
		.then(products => {
			res.render('products/productList', {productos: products})
		})	
    },
	
	productSearch: (req, res)=>{
		db.Product.findAll({
			where:{
				name: {[db.Sequelize.Op.like]:"%"+req.query.search+"%"}
			}
		})
		.then(products => {
			res.render('products/productSearch', {productos: products})
		})
	},

	productDetail: (req,res) => {
        db.Product.findByPk(req.params.id)
		.then(function(productoDetallado){
			res.render('products/productDetail', {producto: productoDetallado})
		})
    },
    // CREATE
    productCreate: (req,res) => {
        res.render("products/productCreate");
    },
	productStore: (req, res) =>{
		db.Product.create({
			name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            size: req.body.size,
			price: req.body.price,
			discount: req.body.discount,
			image: req.file?.filename || "banner1.jpg"
		})
		res.redirect("/products/productList")
	},
    
    // EDIT
	productEdit: (req, res) => {
		db.Product.findOne({
			where:{
				id: req.params.id
			}
		})
		.then(function(product){
			res.render("products/productEdit", { product })
		})
	},
	productUpdate: (req, res) =>{
		db.Product.update({
			name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            size: req.body.size,
			price: req.body.price,
			discount: req.body.discount,
		},{
			where:{
				id: req.params.id
			}
		})
		res.redirect("/products/productList")
	},

    // DELETE
	productDestroy : (req, res) => {
		db.Product.destroy({
			where:{
				id: req.params.id
			}
		})
		res.redirect("/products/productList");
	},
	
};
module.exports = controller







//IDEAS DE PROYECTOS ANTERIORES//






/* 
    productList: (req,res) => {
		db.Product.findAll()
		.then(products => {
			//return res.json(products)
		})

        /* const productos = readJsonFile(dbPath)
        res.render('products/productList', {productos: productos}) 
		
    },
	productStore: (req, res) => {
		const productos = readJsonFile(dbPath)
		const producto = {
			id: productos[productos.length -1].id + 1,
			name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            size: req.body.size,
			price: req.body.price,
			discount: req.body.discount,
			image: req.file?.filename || "banner1.jpg"
		}
		productos.push(producto);
		fs.writeFileSync(dbPath, JSON.stringify(productos, null, 2));
		return res.redirect("/products/productList")
		
	},
	productSearch: (req, res)=>{
		let productosBuscados = []
		let Busqueda = req.query.search
		let productos = readJsonFile(dbPath)
		for(i=0;i<productos.length;i++){
			if(productos[i].name.toUpperCase().includes(Busqueda.toUpperCase())){
				productosBuscados.push(productos[i])
			}
		}
		res.render('products/productSearch', {productos: productosBuscados})
	},
	productDetail: (req,res) => {
        const productos = readJsonFile(dbPath)
        const productoDetallado = productos.find((producto) => producto.id == req.params.id);
        res.render('products/productDetail', {producto: productoDetallado})
    },
	productEdit: (req, res) => {
		const productos = readJsonFile(dbPath)
		const id = req.params.id;
		const product = productos.find(product => product.id == id);
		return res.render("products/productEdit", { product });
	},
	productUpdate: (req, res) => {
        const productos = readJsonFile(dbPath)
		for(let i = 0; i < productos.length; i++) {
			if(productos[i].id == req.params.id){		 
                productos[i] = {
					...productos[i],
					name: req.body.name,
					price: req.body.price,
					discount: req.body.discount,
					category: req.body.category,
					description: req.body.description
					//image: req.file?.filename || "default-image.png"
				}
			}
		};
		fs.writeFileSync(dbPath, JSON.stringify(productos, null, 2));

		return res.redirect("/products/productList");

	},
		productDestroy : (req, res) => {
		const productos = readJsonFile(dbPath);
		const productosFiltrados = productos.filter(product => product.id != req.params.id);

		fs.writeFileSync(dbPath, JSON.stringify(productosFiltrados, null, 2));
		return res.redirect("/products/productList");
		
	}
};*/



	