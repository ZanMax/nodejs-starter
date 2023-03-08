let express = require('express');
//let mysql = require('mysql');
let nunjucks = require('nunjucks');

let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

const api = require('./api')
app.use('/api', api);

const staticPage = require('./template')
app.use('/template', staticPage);

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
