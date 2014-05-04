/* --- EXTERNAL DEPENDENCIES --- */

var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var errorHandler   = require('errorhandler');
var path           = require('path');

/* --- INTERNAL DEPENDENCIES --- */

var routes = require('./routes');
var api    = require('./routes/api');

/* --- STATIC DATA --- */

var PUBLIC_DIR    = path.join(__dirname, 'public');
var SCRIPTS_DIR   = path.join(PUBLIC_DIR, 'js');
var VIEWS_DIR     = path.join(__dirname, "views");
var NODE_MODS_DIR = path.join(__dirname, "node_modules");
var APP_PORT      = 3000;

/* --- INITIALIZATION --- */

var app = express();

/* --- EXPRESS APP SETUP --- */

app.set('views', VIEWS_DIR);
app.set('view engine', 'jade');
app.set('view options', {
    layout: false
});
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

/* --- ENVIRONMENT-SPECIFIC EXPRESS APP SETUP --- */

var env = process.env.NODE_ENV || 'development';
if (env == 'development') {
    app.use(errorHandler({ dumpExceptions: true, showStack: true }));
} else if (env == 'production') {
    app.use(errorHandler());
}

/* --- APP PLUMBING ROUTES --- */

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

/* --- API ROUTES --- */

app.get('/api/actions', api.actionHistory);
app.get('/api/actions/:id', api.action);

/* --- DEFAULT ROUTES --- */

app.get('*', routes.index);

/* --- BIND TO APP PORT --- */

app.listen(APP_PORT, function () {
    console.log("Listening on port %d in %s mode", APP_PORT, env);
});
