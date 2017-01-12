(function () {

    var navCtrl = function ($scope, $log) {
        $log.log('navCtrl is here');

        //set this to the landing page so it will be active on page load. 
        $scope.currentNavItem = 'landing';

    };

    //inject services, register with module
    navCtrl.$inject = ['$scope', '$log'];
    angular.module('angular-app').controller('nav-ctrl', navCtrl);

}());

