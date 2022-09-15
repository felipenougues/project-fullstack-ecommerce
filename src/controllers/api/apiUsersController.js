const db = require('../../database/models')
module.exports = {
    list: (req,res) => {
        db.User.findAll({
            limit: Number(req.query.limit || 10),
            offset: Number(req.query.offset || 0),
            attributes: { exclude: ['password'] }
        })
        .then(users => res.json({
            meta: {
                code: res.statusCode,
                count: users.length,
                url: req.protocol + '://' + req.get('host') + req.originalUrl
            },
            users: users
        }))
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            res.json({
                meta: {
                    code: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.originalUrl
                },
                data: {
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    image: req.protocol + '://' + req.get('host') + '/images/users/' + user.image
                }
            })
        })
    }
}