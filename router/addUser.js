var express = require('express');
var router = express.Router();
var user = require('../model/user');


router.post('/adduser', function(req, res, next) {
    //判断是否是{}
    if (Object.keys(req.body).length == 0) {
        res.status(200).json({"error":"ture","results":"noData"});
    } else {
        //存入数据库
        user.insertUser(req.body.login_name,function(err,result){
            //判断是否出错
            if (err) {
                console.log("userData insert_err:"+err);
                //res.send('{"error":"ture","results":"dataBase err"}');
                res.status(500).json({"error":"ture","results":"dataBase err"});
            } else if (result.length == 0) {
                //如果用户名未重复就保存
                user.create(req.body, function (error) {
                    if (error) {
                        console.log("userData create_err:"+error);
                        res.status(200).json({"error":"ture","results":error});
                        //res.status(200).json({"error":"ture","results":error.toString()});
                    } else {
                        console.log('userData save ok');
                        //res.send('{"error":"false","results":"ok"}');
                        res.status(200).json({"error":"false","results":"ok"});
                    }
                });
            } else {
                //如果用户名重复就返回error
                console.log('已存在用户名');
                //res.send('{"error":"ture","results":"exist user"}');
                res.status(200).json({"error":"ture","results":"exist user"});
            }
        });
    }

});

module.exports = router;