var mongoose = require('mongoose');
var db = require('./db.js');

/**
 *
 * @type {mongoose.Schema}
 */
var userSchema = new mongoose.Schema({
    login_name: {type: String},
    password: {type: String},
    username: {type: String},
    sex: {type: String, enum: ['男', '女']},
    tel: {
        type: Number, validate: {
            validator: function (v) {
                return /^1[34578]\d{9}$/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
    grade: {type: String, enum: ['禁止用户', '普通用户', '高级用户', '管理员', 'supreme']},
    level: {type: String, default: '1'},
    creat_time: {type: Date, default: Date.now},
    update_time: {type: Date, default: Date.now},
    modified: {type: String, default: '系统'},
    token: {type: String},
    remark: {type: String},
    others: {type: {}}
});

/**
 * 查询名字
 * @param loginName
 * @param callback
 */
userSchema.statics.findByLoginName = function (loginName, callback) {
    this.find({login_name: loginName}, callback);
};

/**
 * 新增用户
 * @param login_name
 * @param callback
 */
userSchema.statics.insertUser = function (login_name, callback) {
    this.find({login_name: login_name},callback);
};


module.exports = db.model('user', userSchema);