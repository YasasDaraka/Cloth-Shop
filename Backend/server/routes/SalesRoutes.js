var express = require('express')
var router = express.Router()
var salesController = require('../controller/salesController')


router.post('/',salesController.addOrder)

module.exports = router
