const http 	= require('http'),
	path 	= require('path'),
	express = require('express'),
	bodyParser 	= require('body-parser'),
	morgan 	= require('morgan'),
	fs 		= require('fs'),
	md 		= require('markdown-it')({
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

app.get("/", (req, res, next) => {
	res.render('index');
});

app.get("/project/:project", (req, res, next) => {
	let project = req.params.project.replace(/[^\-0-9a-zÀ-ÿ]/gi, '_').toLowerCase();
	let ppath = path.resolve(__dirname, 'projects', project + '.md');

	console.log(`Trying to render project "${project}" from path "${ppath}"`);

	fs.readFile(ppath, 'utf8', (err,data) => {
		if (err) {
			return res.redirect('/');
		}
		let projectTemplate = md.render(data);
		res.render('project', { project: projectTemplate });
	});
});

server.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", () => {
	let addr = server.address();
	console.log("Server listening at", addr.address + ":" + addr.port);
});
