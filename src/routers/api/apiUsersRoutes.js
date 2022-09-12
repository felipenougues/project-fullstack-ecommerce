const express = require('express')
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController')

// paginar como http://localhost:3030/api/users/?limit=10&offset=10
// consultar como http://localhost:3030/api/users/
router.get('/', apiUsersController.list)
// consultar como http://localhost:3030/api/users/{id}
router.get('/:id', apiUsersController.detail)

module.exports = router