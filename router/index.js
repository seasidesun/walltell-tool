'use strict';

var errorHandler = require('./error_handler.js');

module.exports = function (app) {

    //ping
    app.get('/ping', function (req, res) { res.send('OK'); });

    // 404 handler
    app.use(errorHandler.handler404);

    // Error handler
    app.use(errorHandler.errorHandler);
}
