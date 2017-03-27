var mongoose = require('mongoose');
var db = require('./db.js');

var monitorDataSchema = new mongoose.Schema({
    collect_folder: {type: String},//采集文件夹名
    monitor_NO: {type: Number},//监控头编号
    monitor_localtion: {type: String},//监控头自定义位置
    collect_time: {type: String},//监控头收集数据时间
    degrees_centigrade: {type: Number},//华氏温度
    degrees_Fahrenheit: {type: Number},//摄氏温度
    temperature: {type: Number},//温度
    humidity: {type: Number},//湿度
    project_name: {type: String},//项目名称
    collector: {type: String},//采集人
    collector_place: {type: String},//采集地点
    create_time: {type: Date, default: Date.now},//创建时间
    update_time: {type: Date, default: Date.now},//更改时间
    modified: {type: String, default: '系统'},//更改人
    level: {type: String, default: '1'},//权限
    remark: {type: String},//备注
    others: {type: {}}//其他
});

/**
 *
 * @param collect_data_folder
 * @param collect_data_time
 * @param collect_data_NO
 * @param callback
 */
monitorDataSchema.statics.insertData = function (collect_data_folder, collect_data_time, collect_data_NO, callback) {
    this.find({
        collect_folder: collect_data_folder,
        collect_time: collect_data_time,
        monitor_NO: collect_data_NO
    }, callback);
};

module.exports = db.model('monitorData', monitorDataSchema);