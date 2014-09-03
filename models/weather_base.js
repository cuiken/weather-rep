/**
 * Created by Ken.Cui on 2014/9/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeatherBaseSchema = new Schema({
    cloudcover: {type: String},
    FeelsLikeC: {type: String},
    FeelsLikeF: {type: String},
    humidity: {type: String},
    precipMM: {type: String},
    pressure: {type: String},
    visibility: {type: String},
    weatherCode: {type: Number, default: 0},
    weatherDesc: {type: String},
    weatherIconUrl: {type: String},
    winddir16Point: {type: String},
    winddirDegree: {type: String},
    windspeedKmph: {type: String},
    windspeedMiles: {type: String},
    create_at: {type: Date, default: Date.now}
});

mongoose.model('WeatherBase', WeatherBaseSchema);