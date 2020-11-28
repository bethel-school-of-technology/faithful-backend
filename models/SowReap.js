// Require mongoose
var mongoose = require ('mongoose');

// Define schema
var Schema = mongoose.Schema;

var SowReap = new Schema({
  date: Date,
  dreamitem: String,
  amount: Number,
  agreement: String,
  verses: String,
  manifestdate: Date,
  comments: String
});

// Compile model from schema
var SowReapModel = mongoose.model('SowReap', SowReap );

module.exports = SowReapModel;