require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const passport = require('passport');

require('./app_api/models/db');
require('./app_api/config/passport');

const usersRouter = require('./app_server/routes/users');
const homeRouter = require('./app_server/routes/home');
const travelRouter = require('./app_server/routes/travel');
const aboutRouter = require('./app_server/routes/about');
const contactRouter = require('./app_server/routes/contact');
const mealsRouter = require('./app_server/routes/meals');
const newsRouter = require('./app_server/routes/news');
const roomsRouter = require('./app_server/routes/rooms');
const apiRouter = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Allow CORS
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/travel', travelRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/rooms', roomsRouter);
app.use('/api', apiRouter);

// Catch unauthorized error and create 401
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res
            .status(401)
            .json({ "message": err.name + ": " + err.message });
    }
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
