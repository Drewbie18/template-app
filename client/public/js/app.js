/**
 * Created by payetted on 1/11/2017.
 */


//define module.
var angularApp = angular.module('angular-app', ['ngRoute','ngMaterial']);

//logging logic (turn off and on)
angularApp.config(function ($logProvider) {
    $logProvider.debugEnabled(true);

});

angularApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'public/views/landing.html',
            controller: 'landing-ctrl'
        })
        .when('/about', {
            templateUrl: 'public/views/about.html',
            controller: 'about-ctrl'
        })
});