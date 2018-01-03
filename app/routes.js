module.exports = function(app){
	console.log('yes');
	app.get('/', function(req, res){
		res.render('view/index');
	});
}