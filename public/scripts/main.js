/**
 * Entry point for frontend app.
 */
define("main", [
    "config",
    "jquery",
    "util/firstUtil",
    "hbs!template/main"
], function (config, $, firstUtil, mainTmpl) {
    console.log("entering main function");
    $('body').prepend(mainTmpl());
    firstUtil.log();
});
