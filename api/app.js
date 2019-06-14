var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var profileRouter = require("./routes/profile");
var searchRideRouter = require("./routes/searchRide");
var createRideRouter = require("./routes/createRide");
var acceptRideRouter = require("./routes/acceptRide");
var checkRequestRideRouter = require("./routes/checkRequestRide");
var fetchrequestedrideRouter = require("./routes/fetchrequestedrides");
var requestedrideRouter = require("./routes/requestedride");
var updateprofileRouter = require("./routes/updateprofile");
var ridesacceptrejectRouter= require("./routes/ridesacceptreject");
var myRidesRouter = require("./routes/myRides");
var checkAcceptedRideRouter= require("./routes/checkAcceptedRide");
var checkRejectedRideRouter= require("./routes/checkRejectedRide");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(myRidesRouter);

app.use(loginRouter);
app.use(registerRouter);
app.use(profileRouter);
app.use(searchRideRouter);
app.use(createRideRouter);
app.use(acceptRideRouter);
app.use(requestedrideRouter);
app.use(checkRequestRideRouter);
app.use(fetchrequestedrideRouter);
app.use(updateprofileRouter);
app.use(ridesacceptrejectRouter);

app.use(checkAcceptedRideRouter);

app.use(checkRejectedRideRouter);


//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;