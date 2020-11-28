// Require mongoose
var mongoose = require ('mongoose');

// Define schema
var Schema = mongoose.Schema;

var Dream = new Schema({
  date: Date,
  dream: String,
  verses: String
});

// Compile model from schema
var DreamModel = mongoose.model('Dream', Dream );

module.exports = DreamModel;