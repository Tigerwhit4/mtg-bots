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
