var app = require('./config/express')();
var http = require('http').Server(app);

var porta = process.env.PORT || 5000;

http.listen(porta, function() {
    console.log("servidor rodando");
})
