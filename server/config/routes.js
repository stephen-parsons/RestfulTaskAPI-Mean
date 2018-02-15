var tasks = require('../controllers/tasks.js');
module.exports = function(app){
  app.get('/', function(req, res) {	
	 res.render('index.html');
  })
  app.get('/tasks', function(req, res) {
    tasks.show(req,res); 
  })
  app.get('/tasks/:id', function(req, res) {
    tasks.findOne(req,res,req.params.id); 
  })
  app.get('/new/:title/:description', function(req, res) {
    tasks.create(req,res,req.params.title,req.params.description);
  })
  app.get('/remove/:id', function(req, res) {
    tasks.deleteOne(req,res,req.params.id); 
  })
  app.put('/edit/:id/:title/:description', function(req, res) {
    tasks.updateOne(req,res,req.params.id, req.params.title, req.params.description); 
  })
};