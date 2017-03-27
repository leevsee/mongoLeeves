var express = require('express');
var router = express.Router();
//var multer  = require('multer');
//var upload = multer({ dest: 'uploads/' });

router.post('/upload', function (req, res, next) {
    console.log(req.file);
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据, 如果存在的话
});


module.exports = router;
