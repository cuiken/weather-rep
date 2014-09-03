/**
 * Created by Ken.Cui on 2014/9/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChanceofSchema = new Schema({
    chanceoffog: {type: String},
    chanceoffrost: {type: String},
    chanceofhightemp: {type: String},
    chanceofovercast: {type: String},
    chanceofrain: {type: String},
    chanceofremdry: {type: String},
    chanceofsnow: {type: String},
    chanceofsunshine: {type: String},
    chanceofthunder: {type: String},
    chanceofwindy: {type: String},
    create_at: {type: Date, default: Date.now}
});

mongoose.model('Chanceof', ChanceofSchema);