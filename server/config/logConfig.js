/**
 *This file will contain the configuration for the log4js loggers.
 *
 * At this time we can use log4js as a singleton. Therefore to log something in
 * this project require this file rather than log4js itself.
 *
 * ##Not sure if this will scale.##
 
 */

var log4js = require('log4js');

//create relative path function for this project setup
const path = require('path');
var logPath = path.join(__dirname + '..\\..\\logs');

//configure appenders.
var conf = {

    appenders: [
        {type: 'console'},
        {
            type: 'file',
            filename: logPath + '\\general.log',
            category: 'general',
            maxLogSize: 20480,
            backups: 3,
            setLevel: 'trace'
        }
    ]

};

//apply appenders to log4js and export configured log4js instance.
log4js.configure(conf);
module.exports = log4js;