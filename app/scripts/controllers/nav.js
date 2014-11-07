'use strict';

app.controller('NavCtrl', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
});

app.controller('LeftCtrl', function($scope, $mdSidenav) {
    $scope.close = function() {
        $mdSidenav('left').close();
    };
});
