// Require mongoose
var mongoose = require ('mongoose');

// Define schema
var Schema = mongoose.Schema;

var Saving = new Schema({
  purpose: String,
  goal: Number,
  currentamount: Number
});

// Compile model from schema
var SavingModel = mongoose.model('Saving', Saving );

module.exports = SavingModel;