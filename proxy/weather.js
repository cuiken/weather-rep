/**
 * Created by Ken.Cui on 2014/9/3.
 */

var models = require('../models');
var Weather = models.Weather;

exports.newAndSave = function (data, callback) {
    var weather = new Weather();
    weather.date = data.date;
    weather.latitude = data.latitude;
    weather.longitude = data.longitude;
    weather.HeatIndexC = data.HeatIndexC;
    weather.HeatIndexF = data.HeatIndexF;
    weather.time = data.time;
    weather.WindChillC = data.WindChillC;
    weather.WindChillF = data.WindChillF;
    weather.WindGustKmph = data.WindGustKmph;
    weather.WindGustMiles = data.WindGustMiles;
    weather.DewPointC = data.DewPointC;
    weather.DewPointF = data.DewPointF;
    weather.maxtempC = data.maxtempC;
    weather.maxtempF = data.maxtempF;
    weather.mintempC = data.mintempC;
    weather.mintempF = data.mintempF;
    weather.weather_base_id = data.weather_base_id;
    weather.astronomy_id = data.astronomy_id;
    weather.area_id = data.area_id;
    weather.chanceof_id = data.chanceof_id;

    weather.save(callback);
}