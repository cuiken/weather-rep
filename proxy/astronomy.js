/**
 * Created by Ken.Cui on 2014/9/4.
 */
var Astronomy = require('../models').Astronomy;
exports.newAndSave = function (moonrise, moonset, sunrise, sunset, callback) {
    var astronomy = new Astronomy();
    astronomy.moonrise = moonrise;
    astronomy.moonset = moonset;
    astronomy.sunrise = sunrise;
    astronomy.sunset = sunset;
    astronomy.save(callback);
}