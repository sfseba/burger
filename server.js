var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var app = express();
var PORT = process.env.PORT || 3000;

// var db = process.env.DATABASE_URL || 'localhost';

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(PORT);
// //Dependencies
// var express = require('express');
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');
//
//
// var app = express();
// var PORT = process.env.PORT || 3000;
//
// app.use(express.static(__dirname + '/public'));
//
// /// bodyparsers
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// app.use(bodyParser.text({ type: 'text/html' }));
//
// // override with POST having ?_method=DELETE or PUT
// app.use(methodOverride('_method'));
//
// // Set Handlebars as the default templating engine.
// var exphbs = require('express-handlebars');
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
//
// // now import the routes
// var routes = require('./controllers/burgers_controller.js');
// app.use('/', routes);
//
// // Initiate the listener.
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
