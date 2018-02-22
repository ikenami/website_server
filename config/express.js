var express = require('express');
var path = require('path');

module.exports = function() {
    var app = express();

    app.use(express.static('./app/public'));

    app.all('/*', function(req, res) {
      res.sendFile(path.resolve('./app/public/index.html'));
    });

    return app;
}
