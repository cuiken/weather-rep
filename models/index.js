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
require('./weather_realtime');
require('./area');
require('./weather');

exports.Chanceof = mongoose.model('Chanceof');
exports.Astronomy = mongoose.model('Astronomy');
exports.WeatherRealtime = mongoose.model('WeatherRealtime');
exports.Area = mongoose.model('Area');
exports.Weather = mongoose.model('Weather');
