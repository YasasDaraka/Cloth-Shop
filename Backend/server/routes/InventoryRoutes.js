var express = require('express')
var router = express.Router()
var inventoryController = require('../controller/inventoryController')

router.get('/getAll',inventoryController.getAllInventory)
router.get('/search/:id',inventoryController.getInventoryById)
router.post('/',inventoryController.addInventory)


module.exports = router

