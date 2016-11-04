'use strict';

var router = require('express').Router();

router.get('/', function (req, res) {res.render('index', {title: ''});});
router.get('/encryption', function (req, res) {res.render('page/encryption', {title: ''});});


module.exports = router;
