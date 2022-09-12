const db = require('../../database/models')
module.exports = {
    list: (req,res) => {
        db.User.findAll({
            limit: Number(req.query.limit),
            offset: Number(req.query.offset)
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

    }
}