/**
 * Created by Ken.Cui on 2014/9/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CurrentConditionSchema = new Schema({
    latitude: {type: String},
    longitude: {type: String},

    area_id: {type: ObjectId},
    weather_base_id: {type: ObjectId},
    observation_time: {type: String},
    temp_C: {type: String},
    temp_F: {type: String},

    create_at: {type: Date, default: Date.now}
});

mongoose.model('CurrentCondition', CurrentConditionSchema);