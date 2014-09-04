/**
 * Created by Ken.Cui on 2014/9/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AreaSchema = new Schema({
    areaName: {type: String},
    country: {type: String},
    latitude: {type: String},
    longitude: {type: String},
    population: {type: String},
    region: {type: String},
    weatherUrl: {type: String},
    origin_latitude: {type: String},
    origin_longitude: {type: String}
});

AreaSchema.index({origin_latitude: 1, origin_longitude: 1});

mongoose.model('Area', AreaSchema);