var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

var express = require('express');
var path = require('path');

module.exports = function() {
    var app = express();
    
    app.use(allowCrossDomain);
    app.use(express.static('./app/public'));

    app.all('/*', function(req, res) {
      res.sendFile(path.resolve('./app/public/index.html'));
    });

    return app;
}
