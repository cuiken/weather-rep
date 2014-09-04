/**
 * Created by Ken.Cui on 2014/9/4.
 */
var Astronomy = require('../models').Astronomy;
exports.newAndSave = function (data, callback) {
    var astronomy = new Astronomy();
    astronomy.moonrise = data.moonrise;
    astronomy.moonset = data.moonset;
    astronomy.sunrise = data.sunrise;
    astronomy.sunset = data.sunset;
    astronomy.save(callback(astronomy));
}