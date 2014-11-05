'use strict';

/**
 * @ngdoc function
 * @name angularMaterialExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMaterialExampleApp
 */
angular.module('angularMaterialExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
