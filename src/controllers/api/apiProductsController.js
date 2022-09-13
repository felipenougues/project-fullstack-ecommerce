const db = require('../../database/models')
module.exports = {

    list: (req,res) => {
        db.Product.findAll({
            attributes: ["id","name","description","category_id","price", "image"],
           
        }) 
        .then(products => {
            res.json({
                count: products.length,
                countByCategory: "",
                products: products

/*                 products: products.map(product => {
                    return ({
                    id: product["id"],
                    name: product["name"],
                    description: product["description"],
                    category: product["category_id"],
                    detail: req.protocol + '://' + req.get('host') + req.originalUrl
                    }
                )}) */
            })
        })
    },

    detail: (req,res) =>{
        db.Product.findByPk(req.params.id)
        .then(product => {
            return(
                res.json({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category: product.category_id,
                    size: product.size,
                    imageUrl: product.image
                })
            )
        }) 
    }
}