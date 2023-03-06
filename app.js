let express = require('express');
//let mysql = require('mysql');
let nunjucks = require('nunjucks');

let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

/*
const {token, db_host, db_name, db_user, db_password} = require('./config');

var pool = mysql.createPool({
    host: db_host,
    database: db_name,
    user: db_user,
    password: db_password
});


router.get('/api', async function (req, res) {
    let api_key = req.headers['token'];
    if (api_key !== token) {
        res.status(401).send('Unauthorized');
    } else {
        pool.getConnection(function (err, connection) {
            connection.query('SELECT * FROM words_words', function (error, results, fields) {
                connection.release();
                if (error) throw error;
                res.json(JSON.stringify(results));
            });
        });
    }
});
*/
const api = require('./api')
app.use('/api', api);

const staticPage = require('./template')
app.use('/template', staticPage);

/*
router.get('/template', (req, res) => {
    let data = {
        title: 'Template example',
        message: 'Hello world!',
        layout: 'base.html',
    }
    res.render('index.html', data)
});
*/
app.listen(3000, function () {
    console.log('App listening on port 3000');
});
