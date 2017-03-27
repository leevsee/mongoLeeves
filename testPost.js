var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.get('/', function (req, res) {
    console.log(req.body);
    res.send('ok');
});

app.post('/adduser', jsonParser, function (req, res) {
    //console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length == 0) {
        console.log(!req.body);
        res.send('没有提交数据');
        //return res.sendStatus(400);
    } else {
        console.log(req.body);
        res.send('get json');
    }
});

app.listen(3000);