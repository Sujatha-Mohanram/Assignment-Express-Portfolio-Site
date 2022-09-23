/*
Student Number : 301152761
Student Name: Sujatha Mohanram
Assignment : 1
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'node_modules')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(function(req,res,next){
  res.locals.userValue = null;
  next();
})
app.post('/contact',function(req,res){
  var contact = {
      first : req.body.fname,
      last : req.body.lname,
      phone : req.body.phone,
      email : req.body.email,
      message : req.body.message
  }
  console.log(contact);
  res.render('contact',{
      userValue : contact,
      title : 'Contact Me'
  });
     
});
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
