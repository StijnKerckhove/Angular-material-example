'use strict';

/**
 * @ngdoc function
 * @name angularMaterialExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMaterialExampleApp
 */
angular.module('angularMaterialExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
