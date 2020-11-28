// Require mongoose
var mongoose = require ('mongoose');

// Define schema
var Schema = mongoose.Schema;

var DebtPayoff = new Schema({
  item: String,
  amount: Number,
  minpayment: Number,
  snowballpayment: Number,
  numberleft: Number,
  snownumberleft: Number
});

// Compile model from schema
var DebtPayoffModel = mongoose.model('DebtPayoff', DebtPayoff );

module.exports = DebtPayoffModel;