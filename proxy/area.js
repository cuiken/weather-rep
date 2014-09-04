/**
 * Created by Ken.Cui on 2014/9/4.
 */
var Area = require('../models').Area;


exports.getByRequestLatAndLon=function(){

}

exports.newAndSave = function (data, callback) {
    var area = new Area();
    area.areaName = data.areaName;
    area.country = data.country;
    area.latitude = data.latitude;
    area.longitude = data.longitude;
    area.population = data.population;
    area.region = data.region;
    area.weatherUrl = data.weatherUrl;
    area.origin_latitude = data.origin_latitude;
    area.origin_longitude = data.origin_longitude;
    area.save(callback(area));
}