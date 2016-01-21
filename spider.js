var urllib = require('urllib');
var Bagpipe = require('bagpipe');
var config = require('./config').config;

var Weather = require('./proxy').Weather;
var Area = require('./proxy').Area;
var WeatherReal = require('./proxy').WeatherRealtime;

/**
 * 抓取天气
 * 第一步：获取经纬度信息
 * 第二部：并发远程抓取
 * 第三部：信息入库
 */
var fetch = function (next) {

    var bagpipe = new Bagpipe(10);
    //var locations = ['31.9,119.1', '32.6,103.6'];
    var url = config.remote_host;
    var params = config.req_param;

    urllib.request(config.api_host, {dataType: 'json', timeout: 10000}, function (err, data) {
        if (data) {

            data.forEach(function (local) {
                params.q = local;
                bagpipe.push(urllib.request, url, {
                    dataType: 'json',
                    timeout: 10000,
                    data: params
                }, function (err, data) {
                    if (err) {
                        return next(err);
                    } else {
                        console.log('data=>' + JSON.stringify(data.data));
                        DB(data.data, local, next);
                    }
                });
            });

        }
    });
};

var query = function (latLon, next) {
    var url = config.remote_host;
    var params = config.req_param;

    params.q = latLon;
    urllib.request(url, {dataType: 'json', timeout: 10000, data: params}, function (err, data) {
        if (err) {
            return next(err);
        } else {
            var weather = data.data;
            console.log('data=>' + JSON.stringify(weather));
            if (weather.nearest_area != null && weather.nearest_area[0] != null) {
                DB(weather, latLon, next);
            }
        }
    });
};

function DB(data, local) {

    var ls = local;
    var lat = ls[0];
    var lon = ls[1];

    Area.getByRequestLatAndLon(lat, lon, function (err, area) {

        if (area == null) {
            var areaData = getArea(data);
            if (areaData == null) return;
            areaData.origin_latitude = lat;
            areaData.origin_longitude = lon;
            Area.newAndSave(areaData, function (err, saved) {
                saveWeather(data, saved);

            });
        } else {
            saveWeather(data, area);
        }

    });
}


function saveWeather(data, area) {
    var realWeather = getWeatherRealtime(data);
    var weathers = data.weather;
    var areaId = area._id.toString();
    realWeather.area_id = areaId;
    WeatherReal.newAndSave(realWeather);

    weathers.forEach(function (w) {

        var weather = getWeather(w);
        weather.area_id = areaId;
        Weather.getWeatherByDate(w.date, areaId, function (err, saved) {
            if (!saved) {
                Weather.newAndSave(weather);
            } else {
                Weather.update(saved, weather);
            }
        })

    })
}


function getArea(originData) {

    var area = originData.nearest_area[0];
    if (area == null) return;
    area.areaName = area.areaName[0].value;
    area.country = area.country[0].value;
    area.region = area.region[0].value;
    area.weatherUrl = area.weatherUrl[0].value;

    return area;
}

function getWeatherRealtime(originData) {
    var weatherReal = originData.current_condition[0];
    weatherReal.weatherDesc = weatherReal.weatherDesc[0].value;
    weatherReal.weatherIconUrl = weatherReal.weatherIconUrl[0].value;
    return weatherReal;
}

function getWeather(originData) {
    var w = originData.hourly[0];
    var as = originData.astronomy[0];
    w.sunrise = as.sunrise;
    w.sunset = as.sunset;
    w.moonrise = as.moonrise;
    w.moonset = as.moonset;
    w.date = originData.date;
    w.weatherIconUrl = w.weatherIconUrl[0].value;
    w.weatherDesc = w.weatherDesc[0].value;
    return w;
}


module.exports.fetch = fetch;
module.exports.query = query;