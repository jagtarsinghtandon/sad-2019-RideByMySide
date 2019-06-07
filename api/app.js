var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
var mysql = require('mysql');
var Sequelize = require('sequelize');
// var person = require("./models/Person");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var profileRouter = require("./routes/profile");
var searchRideRouter = require("./routes/searchRide");
//var createRideRouter = require("./routes/createRide");
var con = require("./bin/connection");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRouter);
app.use(registerRouter);
app.use(profileRouter);
app.use(searchRideRouter);
// app.use(con);
// app.use(person);

 //catch 404 and forward to error handler
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
// const sequelize = new  Sequelize("ridebymyside","root","password", {host:"127.0.0.1", dialect: "mysql", 
// operatorsAliases: false});

// app.set('sequelize',sequelize)
///Create Connection to MySql



// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'ridebymysidedb',
//   insecureAuth : true
// });

// // Connect
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('MySql Connected...');
//     app.set('mysql',db)
// });



module.exports = app;