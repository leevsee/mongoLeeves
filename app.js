var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var multer  = require('multer');
var addUser = require('./router/addUser');
var addMonitor = require('./router/addMonitor');
var uploadVideo = require('./router/uploadVideo');

var jsonParser = bodyParser.json();
//var upload = multer({ dest: 'uploads/' });



app.use('/api',jsonParser, addUser);
app.use('/api',jsonParser, addMonitor);
app.use('/api', uploadVideo);


app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}


function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something blew up!' });
    } else {
        next(err);
    }
}


function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

app.listen(3001);