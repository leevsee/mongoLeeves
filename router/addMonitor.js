var express = require('express');
var router = express.Router();
var monitor = require('../model/monitor');

router.post('/addmonitor', function (req, res, next) {
    //判断是否是{}
    if (Object.keys(req.body).length == 0) {
        res.status(200).json({"error": "ture", "results": "noData"});
    } else {
        monitor.insertData(req.body.collect_folder, req.body.collect_time, req.body.monitor_NO, function (err, result) {
            console.log(req.body);
            //判断是否出错
            if (err) {
                console.log("monitorData insert_err:" + err);
                //res.send('{"error":"ture","results":"dataBase err"}');
                res.status(500).json({"error": "ture", "results": "dataBase err"});
            } else if (result.length == 0) {
                //如果用户名未重复就保存
                monitor.create(req.body, function (error) {
                    if (error) {
                        console.log("monitorData create_err:" + error);
                        res.status(200).json({"error": "ture", "results": error});
                        //res.status(200).json({"error":"ture","results":error.toString()});
                    } else {
                        console.log('monitorData save ok');
                        //res.send('{"error":"false","results":"ok"}');
                        res.status(200).json({"error": "false", "results": "ok"});
                    }
                });
            } else {
                //如果用户名重复就返回error
                console.log('已存在监控数据');
                //res.send('{"error":"ture","results":"exist user"}');
                res.status(200).json({"error": "ture", "results": "exist data"});
            }
        });
    }
});

module.exports = router;