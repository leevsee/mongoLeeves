var user = require('../model/user.js');
var monitor = require('../model/monitor.js');

exports.insertUser = function (req, res, next) {
    //console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length == 0) {
        res.send('{"error":"true","results":"noData"}');
        //return res.sendStatus(400);
    } else {
        res.send('{"error":"false","results":"ok"}');
    }
};