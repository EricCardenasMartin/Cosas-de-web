var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/m4/practica3_CardenasMartinEric/index.html'));
});

app.get('/html/:html', function(req, res) {
    res.sendFile(path.join(__dirname + '/m4/practica3_CardenasMartinEric/html/' + req.params.html));
});

app.get('/css/:css', function(req, res) {
    res.sendFile(path.join(__dirname + '/m4/practica3_CardenasMartinEric/css/' + req.params.css));
});

app.get('/fotico/:img', function(req, res) {
    res.sendFile(path.join(__dirname + '/m4/practica3_CardenasMartinEric/imagenes/' + req.params.img));
});

app.listen(8080);