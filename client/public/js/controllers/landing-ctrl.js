(function () {

    var landingCtrl = function ($scope, $log) {
        $log.log('landingCtrl is here');

    };

    //inject services, register with module
    landingCtrl.$inject = ['$scope', '$log'];
    angular.module('angular-app').controller('landing-ctrl', landingCtrl);

}());

