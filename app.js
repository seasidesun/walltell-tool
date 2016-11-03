'use strict';

// 标准库依赖
var fs = require('fs'),
    path = require('path');
// 第三方库依赖
var express = require('express'),
    logger = require('morgan');
// 自身依赖
var router = require('./router'),
	config = require('./config');

// 全局变量
var app = express();

// log
app.use(logger('dev'));
// 静态资源
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 86400000}));

router(app);

var server = app.listen(config.express.port, function () {
  var port = server.address().port;

  console.log('Listening at %s', port);
  console.log('Env: ' + app.get('env'));
});
