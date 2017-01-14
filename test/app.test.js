const expect = require('expect');
const rewire = require('rewire');


var utils = rewire('../server/services/utils');



describe('Test with spies', function () {

    var spyFun = expect.createSpy()

    utils.__set__('toBeReplaced', spyFun)

    it('should call the toBeReplaced method with a spy', function () {

        utils.spyTest();
        expect(spyFun).toHaveBeenCalled();
    });


});


