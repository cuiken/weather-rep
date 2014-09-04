/**
 * Created by Ken.Cui on 2014/9/4.
 */
var WeatherRealtime = require('../models').WeatherRealtime;

exports.newAndSave = function (data, callback) {
    var wr = new WeatherRealtime();
    wr.area_id = data.area_id;
    wr.weatherCode = data.weatherCode;
    wr.weatherDesc = data.weatherDesc;
    wr.weatherIconUrl = data.weatherIconUrl;
    wr.cloudcover = data.cloudcover;
    wr.FeelsLikeC = data.FeelsLikeC;
    wr.FeelsLikeF = data.FeelsLikeF;
    wr.humidity = data.humidity;
    wr.precipMM = data.precipMM;
    wr.pressure = data.pressure;
    wr.visibility = data.visibility;
    wr.winddir16Point = data.winddir16Point;
    wr.winddirDegree = data.winddirDegree;
    wr.windspeedKmph = data.windspeedKmph;
    wr.windspeedMiles = data.windspeedMiles;
    wr.observation_time = data.observation_time;
    wr.temp_C = data.temp_C;
    wr.temp_F = data.temp_F;
    wr.save(callback);
}