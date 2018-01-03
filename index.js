var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

//mongoose.connect('mongodb://localhost:27017/pms');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/view', express.static(path.join(__dirname, 'views')));
app.listen(port);
app.set('view engine', 'ejs');
//require('./app/routes.js')(app);
console.log('The magic happens on port ' + port);
console.log(__dirname);

app.get('/', function(req, res){
		res.render(__dirname + '/views/index');
	});