var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var WeatherSchema = new Schema({
    latitude: {type: String},
    longitude: {type: String},
    date: {type: String},

    HeatIndexC: {type: String},
    HeatIndexF: {type: String},
    time: {type: Number, default: 0},
    WindChillC: {type: String},
    WindChillF: {type: String},
    WindGustKmph: {type: String},
    WindGustMiles: {type: String},
    DewPointC: {type: String},
    DewPointF: {type: String},
    maxtempC: {type: String},
    maxtempF: {type: String},
    mintempC: {type: String},
    mintempF: {type: String},

    weather_base_id: {type: ObjectId},
    astronomy_id: {type: ObjectId},
    area_id: {type: ObjectId},
    chanceof_id: {type: ObjectId},

    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

mongoose.model('Weather', WeatherSchema);