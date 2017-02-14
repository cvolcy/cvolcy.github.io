var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

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

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
	var addr = server.address();
	console.log("Server listening at", addr.address + ":" + addr.port);
});
