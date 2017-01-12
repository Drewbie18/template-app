const express = require('express');
var app = express();

var port = process.env.port || 3001;


//map routes for node modules and other client files
app.use('/public', express.static(__dirname + '/client/public'));
app.use('/assets', express.static(__dirname + '/node_modules'));

//send the index page and let angular routing do the rest. 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/public/index.html');
});


console.log('app is listening on port', port);
app.listen(port);