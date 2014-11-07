'use strict';

/**
 * @ngdoc function
 * @name angularMaterialExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMaterialExampleApp
 */
 app.controller('MainCtrl', function ($scope, $mdSidenav) {
 	$scope.openLeftMenu = function() {
 		$mdSidenav('left').toggle();
 	};
 });
