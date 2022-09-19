const db = require('../../database/models')
module.exports = {

    list: (req,res) => {
        db.Product.findAll({
            include: [{association: 'category'}],
            attributes: ["id","name","description","category_id","price", "image"]
        }) 
        .then(products => {
            let productsDetails = products.map(product => {
                return({
                    id: product["id"],
                    name: product["name"],
                    description: product["description"],
                    price: product["price"],
                    category: product["category"]["name_category"],
                    image: req.protocol + '://' + req.get('host') + "/images/products/" + product['image']
                })
            });
            res.json({
                meta: {
                    code: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.originalUrl
                },
                data:{
                    count: products.length,
                    products: productsDetails
                }
            })
        })
    },

    detail: (req,res) =>{
        db.Product.findByPk(req.params.id)
        .then(product => {
            return(
                res.json({
                    meta:{
                        code: res.statusCode,
                        url: req.protocol + '://' + req.get('host') + req.originalUrl
                    },
                    data:{
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        category: product.category_id,
                        size: product.size,
                        imageUrl: req.protocol + '://' + req.get('host') + "/images/products/" + product.image
                    }
                })
            )
        }) 
    }
}