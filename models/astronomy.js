/**
 * Created by Ken.Cui on 2014/9/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AstronomySchema = new Schema({
    moonrise: {type: String},
    moonset: {type: String},
    sunrise: {type: String},
    sunset: {type: String},
    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

AstronomySchema.index({create_at: -1});

mongoose.model('Astronomy', AstronomySchema);