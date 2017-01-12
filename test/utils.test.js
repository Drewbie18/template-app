const utils = require('../server/services/utils');

it('should add two numbers', function () {

    var res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error('Value not correct');
    }
});

it('should square the number', function () {
    var res = utils.square(5);

    if (res !== 25) {
        throw new Error('The value should be 25 but we got: ' + res);
    }

});