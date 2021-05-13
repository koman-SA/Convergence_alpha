var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
const devices = require('./routes/devices');
var indexRouter = require('./routes/index');
var devicesRouter = require('./routes/devices');
var app = express();



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/devices', devicesRouter);
module.exports = app;
