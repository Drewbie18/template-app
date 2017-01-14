(function () {

    var landingCtrl = function ($scope, $log, $http) {
        $log.log('landingCtrl is here');


        $scope.getTest = function () {
            $http({
                method: 'GET',
                url: '/api/v1/sample'
            }).then(function (res) {

                $log.debug(res);

            }, function (err) {
            });
        }

    };

    //inject services, register with module
    landingCtrl.$inject = ['$scope', '$log', '$http'];
    angular.module('angular-app').controller('landing-ctrl', landingCtrl);

}());

