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
    weatherUrl: {type: String}
});

mongoose.model('Area', AreaSchema);