var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var session = require('express-session');
var cookieParser = require('cookie-parser');

//mongoose.connect('mongodb://localhost:27017/pms');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/view', express.static(path.join(__dirname, 'views')));
app.use('/src', express.static(path.join(__dirname, 'node_modules')));
app.use('/controllers', express.static(path.join(__dirname, 'app/controllers')));
app.use('/models', express.static(path.join(__dirname, 'app/models')));
app.listen(port);
app.set('view engine', 'ejs');
//require('./app/routes.js')(app);
console.log('The magic happens on port ' + port);
console.log(__dirname);

app.use(cookieParser());
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;
app.get('/', function(req, res){
		sess = req.session;
		res.render(__dirname + '/views/index');
	});