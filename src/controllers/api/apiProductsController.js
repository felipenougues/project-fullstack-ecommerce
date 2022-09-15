const db = require('../../database/models')
const { sequelize } = require('sequelize')
module.exports = {

    list: (req,res) => {
        db.Product.findAll({
            attributes: ["id","name","description","category_id","price", "image", 
        ],
        /* [sequelize.fn('concat', "la url", "/detalle", sequelize.col("product_id")), "alias"] */
        }) 
        .then(products => {
            let productsDetails = products.map(product => {
                return({
                    id: product["id"],
                    name: product["name"],
                    description: product["description"],
                    category: product["category_id"],
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