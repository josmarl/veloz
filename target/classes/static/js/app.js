'use strict';
var app = angular.module('app', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'toastr'
]);

//var SERVER = 'http://192.168.42.188:8083';
var SERVER = 'http://localhost:8083';

var ACTIVE = '1';
var INACTIVE = '0';
app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'navigation',
            controllerAs: 'controller'
        })
        .when('/home', {
            templateUrl: 'home.html'
        })
        .when('/usuario', {
            templateUrl: 'views/usuario/usuario.html',
            controller: 'usuarioController'
        })
        .when('/usuario/new', {
            templateUrl: 'views/usuario/usuario_form.html',
            controller: 'usuarioController'
        })
        .when('/usuario/edit/:id', {
            templateUrl: 'views/usuario/usuario_edit.html',
            controller: 'usuarioController'
        })

        .otherwise('/login');

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);
