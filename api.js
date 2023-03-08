const express = require('express')
const router = express.Router()
const db = require('./db')
const {token} = require('./config');

router.use((req, res, next) => {
    let api_key = req.headers['token'];
    if (api_key !== token) {
        res.status(401).send('Unauthorized');
    } else {
        next()
    }
})

/**
 * @swagger
 * /:
 *   get:
 *     summary: Some description
 *     description: Optional extended description in Markdown.
 *     responses:
 *       200:
 *         description: A list of something.
 */
router.get('/', (req, res) => {
    db.query('SELECT * FROM words_words', (error, results) => {
        if (error) throw error;
        res.json(JSON.stringify(results));
    });

})

module.exports = router