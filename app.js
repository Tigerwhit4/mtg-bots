/* --- DEPENDENCIES --- */

var express     = require('express');
var morgan      = require('morgan');
var path        = require('path');
var requirejsMW = require('requirejs-middleware');

/* --- STATIC DATA --- */

var BUILD_DIR     = path.join(__dirname, 'build');
var PUBLIC_DIR    = path.join(__dirname, 'public');
var SCRIPTS_DIR   = path.join(PUBLIC_DIR, 'scripts');
var NODE_MODS_DIR = path.join(__dirname, "node_modules");
var APP_PORT      = 3000;

/* --- INITIALIZATION --- */

var app = express();
app.use(morgan('dev'));

// plumbing middleware to auto-build require modules on-demand
app.use(requirejsMW({
    src:      SCRIPTS_DIR,
    dest:     BUILD_DIR,
    build:    "requirejs",
    debug:    true,
    defaults: {
        preserveLicenseComments: false,
        mainConfigFile:          SCRIPTS_DIR + "/config.js",
        optimize:                "none",
        baseUrl:                 SCRIPTS_DIR
    },
    modules:  {
        '/main.js': {
            name: "main"
        }
    }
}));

// frontend static resource serving
app.use("/requirejs", express.static(NODE_MODS_DIR + "/requirejs"));
app.use(express.static(BUILD_DIR));
app.use(express.static(PUBLIC_DIR));

app.listen(APP_PORT);
console.log("Listening on port " + APP_PORT + "...");
