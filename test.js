/**
 * Created by payetted on 1/12/2017.
 */
var log4js = require('./server/config/log4jsConfig');
var logger = log4js.getLogger('general');



logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

