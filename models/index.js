var mongoose = require('mongoose');
var config = require('../config').config;

mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

require('./astronomy');
require('./chanceof');
require('./weather_base');
require('./current_condition');
require('./nearest_area');
require('./weather');

exports.Chanceof = mongoose.model('Chanceof');
exports.Astronomy = mongoose.model('Astronomy');
exports.CurrentCondition = mongoose.model('CurrentCondition');
exports.Area = mongoose.model('Area');
exports.WeatherBase = mongoose.model('WeatherBase');
exports.Weather = mongoose.model('Weather');
