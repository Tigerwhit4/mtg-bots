/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
// NOTE: "actions" are single-step data points indicating a point in time where a player
//       made an active decision against the game in its current state at the time of the decision.
//       this is to be distinguished from game engine actions, which are lower-level, that the
//       game undertakes to carry out the action of the player. game engine actions are not
//       included as data points, under the "action" dataset. note that game engine actions may
//       be interesting things to record at a future date, but not in the initial prototype, where
//       the ML algos are doing analysis solely based on player actions.
var data = {
    "actions": [{
        "id": 0,
        "player": "joe",
        "type": "progress",
        "action": "passes end step priority"
    },{
        "id": 1,
        "player": "ryan",
        "type": "spell",
        "action": "casts Lightning Bolt",
        "targets": [
            "joe"
        ],
        "finalCastingCost": "R"
    },{
        "id": 2,
        "player": "joe",
        "type": "progress",
        "action": "concedes"
    }]
};

// GET

exports.actions = function (req, res) {
    var actions = [];

    // TODO: allow client to specify that only id's are needed
    data.actions.forEach(function (action, i) {
        actions.push({
            id: i,
            player: action.player,
            type: action.type,
            action: action.action
        });
    });
    res.json({
        actions: actions
    });
};

exports.action = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.actions.length) {
        res.json({
            action: data.actions[id]
        });
    } else {
        res.json(false);
    }
};
