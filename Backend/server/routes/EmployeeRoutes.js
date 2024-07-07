var express = require('express')
var router = express.Router()
var employeeController = require('../controller/EmployeeController')

router.get('/getAll',employeeController.getAllEmployees)
router.get('/search/:id',employeeController.getEmployeeById)
router.post('/',)
router.put('/',)
router.delete('/',)

module.exports = router

