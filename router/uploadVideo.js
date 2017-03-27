var express = require('express');
var router = express.Router();

var multer = require('multer');
//默认dest，不能改文件名
//var upload = multer({ dest: 'uploads/' });

//自定义storage，可以改文件名,
//注意: Multer 不会为你添加任何扩展名, 你的程序应该返回一个完整的文件名
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp')
    },
    filename: function (req, file, cb) {
        //console.log(file);
        //{ fieldname: 'pdf',
        //    originalname: '9.pdf.pdf',
        //    encoding: '7bit',
        //    mimetype: 'application/pdf' }
        cb(null, file.fieldname + '-' + Date.now());
    }
});

var fields = [
    {name: 'pdf', maxCount: 1},
    {name: 'text', maxCount: 2}
];

var upload = multer({
    storage: storage
    //limits: {
    //    //在这里设置最多能上传多少个文件，那么就不用在下面upload.array('field1', 5)设置了
    //    //files: 1, //一次只允许上传一个文件
    //    //fileSize: 1000 * 1024  // 设置文件大小不能超过1000*1024
    //}
}).fields(fields);

router.post('/upload', function (req, res, next) {
    //req.file.filename = 123;
    //console.log(req.files);
    //错误处理机制
    upload(req, res, function (err) {
        if (err) {
            // 发生错误
            console.log(err);
            res.status(400).json({"error": "ture", "results": err.code});
            return
        }
        res.status(200).json({"error": "false", "results": "upload ok"});
        // 一切都好
    });
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据, 如果存在的话
    //console.log(error);
    //if (err) {
    //    // 发生错误
    //    console.log(err);
    //    res.status(400).json({"error": "ture", "results": err.code});
    //}else {

    //}

});


module.exports = router;
