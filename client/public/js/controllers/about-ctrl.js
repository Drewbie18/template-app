(function () {

    var aboutCtrl = function ($scope, $log) {
        $log.log('aboutCtrl is here');

    };

    //inject services, register with module
    aboutCtrl.$inject = ['$scope', '$log'];
    angular.module('angular-app').controller('about-ctrl', aboutCtrl);

}());

