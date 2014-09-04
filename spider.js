var urllib = require('urllib');
var Bagpipe = require('bagpipe');
var config = require('./config').config;
var EventProxy = require('eventproxy');

var Weather = require('./proxy').Weather;
var Area = require('./proxy').Area;
var Astornomy = require('./proxy').Astronomy;
var Chanceof = require('./proxy').Chanceof;
var WeatherReal = require('./proxy').WeatherRealtime;

/**
 * 抓取天气
 * 第一步：获取经纬度信息
 * 第二部：并发远程抓取
 * 第三部：信息入库
 */
var fetch = function (next) {

    var bagpipe = new Bagpipe(10);
    var locations = ['31.945,119.1687', '32.65533,103.6047'];
    var url = config.remote_host;
    var params = config.req_param;

    for (var i = 0; i < locations.length; i++) {
        params.q = locations[i];
        bagpipe.push(urllib.request, url, {dataType: 'json', timeout: 10000, data: params}, function (err, data) {

            if (err) {
                return next(err);
            } else {
                DB(data.data, params.q, next);
            }
        });

    }
};

function DB(data, query) {

//    var proxy = new EventProxy();
//    var events = ['area', 'chanceof', 'astronomy'];
//    proxy.assign(events, function (area, chanceof, astronomy) {
//
//    });

    var area = getArea(data.nearest_area[0]);

    var _curr = getWeatherRealtime(data.current_condition[0]);
    var weathers = data.weather;

    var qs = query.split(',');

    area.origin_latitude = qs[0];
    area.origin_longitude = qs[1];

    Area.newAndSave(area, function (area) {

        _curr.area_id = area._id;

        WeatherReal.newAndSave(_curr);

        weathers.forEach(function (w) {
            Astornomy.newAndSave(getAstronomy(w), function (astornomy) {
                Chanceof.newAndSave(getChanceof(w), function (chanceof) {

                    Weather.newAndSave(getWeather(w, astornomy._id, chanceof._id, area._id));
                })
            })
        })
    });


}

function getArea(originData) {
    var area = originData;
    area.areaName = originData.areaName[0].value;
    area.country = originData.country[0].value;
    area.region = originData.region[0].value;
    area.weatherUrl = originData.weatherUrl[0].value;
    return area;
}

function getWeatherRealtime(originData) {
    var weatherReal = originData;
    weatherReal.weatherDesc = originData.weatherDesc[0].value;
    weatherReal.weatherIconUrl = originData.weatherIconUrl[0].value;
    return weatherReal;
}

function getAstronomy(weather) {
    return weather.astronomy[0];
}

function getWeather(weather, as_id, ch_id, area_id) {
    var w = weather.hourly[0];
    w.date = weather.date;
    w.weatherIconUrl = w.weatherIconUrl[0].value;
    w.weatherDesc = w.weatherDesc[0].value;
    w.astronomy_id = as_id;
    w.chanceof_id = ch_id;
    w.area_id = area_id;
    return w;
}

function getChanceof(weather) {
    var w = weather.hourly[0];
    return w;
}

module.exports = fetch;
module.exports.fetch = fetch;