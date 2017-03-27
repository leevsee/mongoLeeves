var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/monitoriDB');

db.once('open', function (callback) {
    console.log("连接成功");
});

module.exports = db;