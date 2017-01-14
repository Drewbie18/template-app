/**
 * Sample functions
 */

module.exports.add = function (a, b) {
    return a + b;
};


module.exports.square = function (x) {
    return x * x;
};

module.exports.setName = function (user, fullName) {
    //create names array by splitting fullname at the space
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};


//mock async method
module.exports.asyncAdd = function (a, b, callback) {
    setTimeout(function () {
        callback(a + b);
    }, 1000)
};


module.exports.asyncFetch = function (name, callback) {

    setTimeout(function () {
        callback(name);
    }, 500);


};

function toBeReplaced() {
    console.log('I should have been replaced');
}

module.exports.spyTest = function () {

    //calls the function.
    toBeReplaced();

};