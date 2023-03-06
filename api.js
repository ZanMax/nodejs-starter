const express = require('express')
const router = express.Router()
let {db} = require('./db')
const {token} = require('./config');

router.use((req, res, next) => {
    let api_key = req.headers['token'];
    if (api_key !== token) {
        res.status(401).send('Unauthorized');
    } else {
        next()
    }
})

router.get('/', (req, res) => {
    //res.send('API is working properly')
    db.query('SELECT * FROM words_words', (error, results) => {
        if (error) throw error;
        res.json(JSON.stringify(results));
    });

})

module.exports = router