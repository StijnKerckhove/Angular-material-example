/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialExampleApp
 * @description
 * # angularMaterialExampleApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularMaterialExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
