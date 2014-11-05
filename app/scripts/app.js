'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialExampleApp
 * @description
 * # angularMaterialExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaterialExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
