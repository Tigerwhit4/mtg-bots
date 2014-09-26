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
'use strict';

/**
 * Base module for environment services.
 */
angular.module('mtgBots.services.env', [])

    /**
     * Provide the version of the deployed app.
     * // TODO: have this value filled in by build process.
     *
     * @Return the deployed version string
     */
    .value('version', '0.1')

    ;  // end of base module setup
// SCRATCH-NOTES
//
// Would be great for game to keep track of "which revealed cards have been played"
//
// Application should take into account that only revealed info can be deduced from the browser,
// e.g., server-side bot info should only be kept on server. Also, keep in mind that the state
// of an object (e.g., morph) may change. Thus, it may be prudent to tie "revealing" info to
// transactions, e.g., include section of transaction that would be contain "newly-revealed info".
//

angular.module('mtgBots')

    /**
     * Controller to update the board, where any "revealed" game-relevant UI component is placed.
     */
    .controller('BoardController', ['$scope', '$http', function ($scope, $http) {
        // do something like the below
        /*
        $scope.board = {
            'stack': [],
            'players': [{
                'id': ...,
                'hand': [],
                'battlefield': [{
                    'id': ...,
                    'name': 'Kird Ape',
                    'power': 1,
                    'power': 2
                }],
                'attacking': [{
                    'id': ...,  // from "battlefield" data
                    'target': ...,  // planeswalker or player
                }],

                'defending': []

                // Unlike exile and graveyard, library size may be different from "revealed"
                // library; thus, need to keep track of library size separately.
                'librarySize': 20,

                // NOTE: shuffling causes revealed library to normally be reset
                // NOTE: there should be base "card" type, and then "library card" type to define
                //       the below json
                'library': [{
                    'id': 
                    'offsetFromTop': 0
                }],
                'graveyard': []
                'exile': []
            },{
                'id': ...,
                'hand': [],
                'library': [],
                'graveyard': [],
                'exile': []
            }]
        };
        */
    }]);
// SCRATCH-NOTES
//

angular.module('mtgBots')

    /**
     * Controller to update the game state info, such as timers and life totals.
     */
    .controller('GameStateController', ['$scope', '$http', function ($scope, $http) {
        // do something like the below
        /*
        $scope.gameState = {
            'players': [{
                'id': ...,
                'life': ...,

                // timer in seconds... note that the timer doesn't increment while game is
                // making adjustments... only when waiting on player to decide
                'timer': 1000,

                'handSize': 5,
                'librarySize': 20,
                'graveyardSize': 0
            },{
                'id': ...,
                'life': ...,
                'hand': [],
                'librarySize': 35,
                'library': [],
                'exile': [],
                '
            }]
        };
        */
    }]);
angular.module('mtgBots')

    .controller('TransactionController', ['$scope', '$http', function ($scope, $http) {
        // do something like the below
        /*
            $http.get('/api/action/' + $routeParams.id).
            success(function(data) {
            $scope.action = data.action;
        });
        */
    }]);
'use strict';

/* Directives */

angular.module('mtgBots.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);
'use strict';

/* Filters */

angular.module('mtgBots.filters', []).
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);
angular.module('mtgBots')

    /**
     * Controller to add behavior to main landing page of entire app.
     */
    .controller('MainController', ['$scope', function ($scope) {
            // TODO: do something with scope
        }]);
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
