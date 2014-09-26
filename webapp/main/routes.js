'use strict';

// Declare app level module which depends on filters, and services
angular.module('mtgBots').
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                //templateUrl: 'partials/index',
                controller: IndexCtrl
            }).
            when('/readPost/:id', {
                templateUrl: 'partials/readAction',
                controller: ReadActionCtrl
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
