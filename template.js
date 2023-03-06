const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get('/', (req, res) => {
    let data = {
        title: 'Template example',
        message: 'Hello world!',
        layout: 'base.html',
    }
    res.render('index.html', data)
})

module.exports = router