'use strict';

// Declare app level module which depends on filters, and services
angular.module('mtgBots', ['ngRoute', 'mtgBots.filters', 'mtgBots.services', 'mtgBots.directives']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index',
                controller: IndexCtrl
            }).
            when('/readPost/:id', {
                templateUrl: 'partials/readAction',
                controller: ReadActionCtrl
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);
