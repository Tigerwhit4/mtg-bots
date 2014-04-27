define(['jquery'], function () {

    console.log("in firstUtil defininition");

    /* --- PUBLIC API --- */

    var log = function () {
        console.log("firstUtil has been logged!");
    };

    /* --- EXPORT MODULE --- */

    return {
        log: log
    };
});
