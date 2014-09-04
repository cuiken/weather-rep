/**
 * Created by Ken.Cui on 2014/9/4.
 */
var Chanceof = require('..models').Chanceof;

exports.newAndSave = function (data, callback) {
    var chanceof = new Chanceof();
    chanceof.chanceoffog = data.chanceoffog;
    chanceof.chanceoffrost = data.chanceoffrost;
    chanceof.chanceofhightemp = data.chanceofhightemp;
    chanceof.chanceofovercast = data.chanceofovercast;
    chanceof.chanceofrain = data.chanceofrain;
    chanceof.chanceofremdry = data.chanceofremdry;
    chanceof.chanceofsnow = data.chanceofsnow;
    chanceof.chanceofsunshine = data.chanceofsunshine;
    chanceof.chanceofthunder = data.chanceofthunder;
    chanceof.chanceofwindy = data.chanceofwindy;
    chanceof.save(callback);
}