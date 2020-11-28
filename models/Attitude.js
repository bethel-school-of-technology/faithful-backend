// Require mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var Attitude = new Schema({
    date: Date,
    thoughts: String,
    verses: String,
    possibilities: String
});

// Compile model from schema
var AttitudeModel = mongoose.model('Attitude', Attitude);

module.exports = AttitudeModel;