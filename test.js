var db = require('./model/db.js');
var user = require('./model/user.js');

var user_info = {
    "login_name": "lixin1",
    "password": "lixin",
    "username": "lixin",
    "sex": "男",
    "tel": 15677105707,
    "grade": "管理员",
    "level": "3",
    "modified": "系统",
    "token": "avb",
    "remark": "",
    "others": {}
};

var monitor_data = {



};
//user.create(user_info, function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('save ok');
//    }
//    db.close();
//});
console.log(typeof (user_info.login_name));

/**
 * 增加新用户
 */
user.findByLoginName(user_info.login_name, function (err, result) {
    if (err) {
        console.log(err);
        db.close();
    } else if (result == '') {
        console.log(result);
        user.create(user_info, function (error) {
            if (err) {
                console.log(error);
            } else {
                console.log('save ok');
            }
            db.close();
        });
    } else {
        console.log('已存在用户名');
        db.close();
    }
});