let express = require('express');
let nunjucks = require('nunjucks');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})


const api = require('./api')
app.use('/api', api);

const staticPage = require('./template')
app.use('/template', staticPage);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
