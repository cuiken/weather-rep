/**
 * Created by Ken.Cui on 2014/9/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var WeatherRealtimeSchema = new Schema({

    area_id: {type: ObjectId},

    weatherCode: {type: Number, default: 0},
    weatherDesc: {type: String},
    weatherIconUrl: {type: String},

    cloudcover: {type: String},
    FeelsLikeC: {type: String},
    FeelsLikeF: {type: String},
    humidity: {type: String},           //湿度百分比
    precipMM: {type: String},           //降水(毫米)
    pressure: {type: String},           //大气压力(毫巴)
    visibility: {type: String},         //能见度(千米)
    winddir16Point: {type: String},     //罗盘风向(16点)
    winddirDegree: {type: String},      //风向(度)
    windspeedKmph: {type: String},      //风速（公里/小时）
    windspeedMiles: {type: String},     //风速(英里/小时)

    observation_time: {type: String},
    temp_C: {type: String},
    temp_F: {type: String},

    create_at: {type: Date, default: Date.now}
});

WeatherRealtimeSchema.index({area_id: 1, create_at: -1});

mongoose.model('WeatherRealtime', WeatherRealtimeSchema);