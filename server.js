const path 	= require('path'),
	express = require('express'),
	bodyParser 	= require('body-parser'),
	morgan 	= require('morgan');

var app = express();

// App Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('common'));
app.use(express.static(path.resolve(__dirname, 'static')));
app.set('view engine', 'pug');

app.get("/", (req, res, next) => {
  res.redirect("/project/markdown");
	// res.render('index');
});

app.use("/project", require("./routers/projects"));
app.use("/misc", require("./routers/misc"));

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", () => {
	console.log("Server listening at http://" + (process.env.IP || "0.0.0.0") + ":" + (process.env.PORT || 4000));
});
