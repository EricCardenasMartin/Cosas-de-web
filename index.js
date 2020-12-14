var express = require('express');
var app = express();
var path = require('path');

let localPath = '/m4/practica3_CardenasMartinEric/'

app.use('/', express.static(path.join(__dirname + localPath)));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + localPath + 'index.html'));
//     // res.sendFile(path.join(__dirname + '/m4/practica3_CardenasMartinEric/index.html'));
// });

app.get('/html/:html', function(req, res) {
    res.sendFile(path.join(__dirname + localPath + 'html/' + req.params.html));
});

app.get('/css/:css', function(req, res) {
    res.sendFile(path.join(__dirname + localPath + 'css/' + req.params.css));
});

app.get('/fotico/:img', function(req, res) {
    res.sendFile(path.join(__dirname + localPath + 'imagenes/' + req.params.img));
});

app.listen(8080);