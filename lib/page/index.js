'use strict';

var router = require('express').Router();

router.get('/', function (req, res) {res.render('index');});
router.get('/encryption', function (req, res) {res.render('page/encryption');});


module.exports = router;
