angular.module('App')
    .controller('NavBarController', function($scope) {

        $scope.isCollapsed = true;

        $scope.toggle = function() {
            $scope.isCollapsed = !$scope.isCollapsed
        }
    })
