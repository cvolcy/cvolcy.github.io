var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');
var md = require('markdown-it')({
  html:true
});

var app = express();
var server = http.createServer(app);

// App Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('common'));
app.use(express.static(path.resolve(__dirname, 'static')));
app.set('view engine', 'pug');

app.get("/", function(req, res, next) {
	res.render('index');
});

app.get("/project/:project", function(req, res, next) {
	var project = req.params.project.replace(/[^\-0-9a-zÀ-ÿ]/gi, '_').toLowerCase();
	var ppath = path.resolve(__dirname, 'projects', project + '.md');
	fs.readFile(ppath, 'utf8', function (err,data) {
		if (err) {
			return res.redirect('/');
		}
		var projectTemplate = md.render(data);
		res.render('project', { project: projectTemplate });
	});
});

server.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", function(){
	var addr = server.address();
	console.log("Server listening at", addr.address + ":" + addr.port);
});
