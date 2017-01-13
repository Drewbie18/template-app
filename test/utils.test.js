//assertion library
const expect = require('expect');
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


//using assertion library
it('should add two number together', function () {
    var res = utils.add(4, 5);

    //using the toBe assertion method
    expect(res).toBe(9).toBeA('number');
});


it('should expect some values', function () {

    expect(12).toNotBe(11);

});


//create test case on object method in utils
it('should set the firstName and lastName fields', function () {

    var user = {
        age: 29,
        location: 'Ottawa'
    };

    var res = utils.setName(user, 'Andrew Payette');
    expect(res).toInclude({firstName: 'Andrew'}).toInclude({lastName: 'Payette'})


});

//must add the 'done' argument to the mocha callback to tell it that this is an async call
//and that the test is not complete until done is called.
//if it takes more than 2s mocha will assume it falied. 
it('should add numbers async', function (done) {

    utils.asyncAdd(5, 6, function (sum) {
        expect(sum).toBe(11).toBeA('number');
        done();
    });
});

it('should return an object with name set', function (done) {

    utils.asyncFetch('Drew', function (name) {
        var user = {name: name};
        expect(user).toInclude({name: 'Drew'});
        done();
        
    });
});





