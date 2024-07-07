var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var customerRouter = require('./routes/CustomerRoutes');
var employeeRouter = require('./routes/EmployeeRoutes');
var supplierRouter = require('./routes/SupplierRoutes');
var inventoryRouter = require('./routes/InventoryRoutes');
var salesRouter = require('./routes/SalesRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
const dbConnection = require('./db/DBConnection');
dbConnection();

app.use('/api/v1/customer', customerRouter);
app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/supplier', supplierRouter);
/*app.use('/api/v1/inventory', inventoryRouter);
app.use('/api/v1/sales', salesRouter);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
