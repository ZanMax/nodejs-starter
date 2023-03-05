var express = require('express');
var app = express();

var mysql = require('mysql');

const {token, db_host, db_name, db_user, db_password} = require('./config');

var pool = mysql.createPool({
    host: db_host,
    database: db_name,
    user: db_user,
    password: db_password
})

app.get('/api', function (req, res) {
    api_key = req.headers['token'];
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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
