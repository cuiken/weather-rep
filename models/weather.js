var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var WeatherSchema = new Schema({

    date: {type: String},
    weatherCode: {type: Number, default: 0},
    weatherDesc: {type: String},
    weatherIconUrl: {type: String},

    moonrise: {type: String},
    moonset: {type: String},
    sunrise: {type: String},
    sunset: {type: String},

    chanceoffog: {type: String},
    chanceoffrost: {type: String},
    chanceofhightemp: {type: String},
    chanceofovercast: {type: String},
    chanceofrain: {type: String},
    chanceofremdry: {type: String},
    chanceofsnow: {type: String},
    chanceofsunshine: {type: String},
    chanceofthunder: {type: String},
    chanceofwindy: {type: String},

    HeatIndexC: {type: String},
    HeatIndexF: {type: String},
    time: {type: Number, default: 0},
    WindChillC: {type: String},
    WindChillF: {type: String},
    WindGustKmph: {type: String},
    WindGustMiles: {type: String},
    DewPointC: {type: String},
    DewPointF: {type: String},
    maxtempC: {type: String},
    maxtempF: {type: String},
    mintempC: {type: String},
    mintempF: {type: String},

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


    area_id: {type: ObjectId},


    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

WeatherSchema.index({area_id: 1, date: 1});

mongoose.model('Weather', WeatherSchema);