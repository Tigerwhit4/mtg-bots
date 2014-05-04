'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
    $http.get('/api/actions').
        success(function(data, status, headers, config) {
            $scope.actions = data.actions;
        });
}

function ReadActionCtrl($scope, $http, $routeParams) {
    $http.get('/api/action/' + $routeParams.id).
        success(function(data) {
            $scope.action = data.action;
        });
}
