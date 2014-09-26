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
