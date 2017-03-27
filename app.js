var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer  = require('multer');
var addUser = require('./router/addUser');
var addMonitor = require('./router/addMonitor');
var uploadVideo = require('./router/uploadVideo');

var jsonParser = bodyParser.json();
var upload = multer({ dest: 'uploads/' });

app.use('/api',jsonParser, addUser);
app.use('/api',jsonParser, addMonitor);
app.use('/api',upload.single('pdf'), uploadVideo);

app.listen(3001);