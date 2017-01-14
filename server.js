const express = require('express');
var app = express();

//setup morgan to write log to console. 
var morgan = require('morgan');
app.use(morgan('dev'));
//setup morgan to write to log files
var morganLogFile = require('./server/config/morganConfig');
morganLogFile(app);


var port = process.env.port || 3001;


//map routes for node modules and other client files
app.use('/public', express.static(__dirname + '/client/public'));
app.use('/assets', express.static(__dirname + '/node_modules'));

//send the index page and let angular routing do the rest. 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/public/index.html');
});

app.get('/api/v1/sample', function (req, res) {

    var data = {
        firstName: 'Drew',
        lastName: 'Payette'
    }

    res.send(data);

});


console.log('app is listening on port', port);
app.listen(port);


//for super test we export the express app so it can be used in the test files
module.exports.app = app;