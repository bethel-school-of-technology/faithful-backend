// Require mongoose
var mongoose = require ('mongoose');

// Define schema
var Schema = mongoose.Schema;

var BillsPaid = new Schema({
  name: String,
  week1: Number,
  week2: Number,
  week3: Number,
  week4: Number
});

// Compile model from schema
var BillsPaidModel = mongoose.model('BillsPaid', BillsPaid );

module.exports = BillsPaidModel;