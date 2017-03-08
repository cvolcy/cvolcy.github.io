const express = require('express'),
  fs      = require('fs'),
  path    = require('path'),
  md      = require('markdown-it')({
    html:true
  });

var router = express.Router();

router.get("/:project", (req, res, next) => {
  let project = req.params.project.replace(/[^\-0-9a-zÀ-ÿ]/gi, '_').toLowerCase();
  let ppath = path.resolve(__dirname, '..', 'projects', project + '.md');

  console.log(`Trying to render project "${project}" from path "${ppath}"`);

  fs.readFile(ppath, 'utf8', (err,data) => {
    if (err) {
      return next();
    }
    let projectTemplate = md.render(data);
    res.render('project', { project: project, template: projectTemplate });
  });
});

module.exports = router;
