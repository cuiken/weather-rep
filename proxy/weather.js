/**
 * Created by Ken.Cui on 2014/9/3.
 */

var models = require('../models');
var Weather = models.Weather;

exports.newAndSave = function (data, callback) {
    var weather = new Weather();
    weather.date = data.date;
    weather.weatherCode = data.weatherCode;
    weather.weatherDesc = data.weatherDesc;
    weather.weatherIconUrl = data.weatherIconUrl;
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
    weather.cloudcover = data.cloudcover;
    weather.FeelsLikeC = data.FeelsLikeC;
    weather.FeelsLikeF = data.FeelsLikeF;
    weather.humidity = data.humidity;
    weather.precipMM = data.precipMM;
    weather.pressure = data.pressure;
    weather.visibility = data.visibility;
    weather.winddir16Point = data.winddir16Point;
    weather.winddirDegree = data.winddirDegree;
    weather.windspeedKmph = data.windspeedKmph;
    weather.windspeedMiles = data.windspeedMiles;

    weather.astronomy_id = data.astronomy_id;
    weather.area_id = data.area_id;
    weather.chanceof_id = data.chanceof_id;

    weather.save(callback);
}