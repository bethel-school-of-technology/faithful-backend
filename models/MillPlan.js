// Require mongoose
var mongoose = require ('mongoose');

// Define schema
var Schema = mongoose.Schema;

var MillPlan = new Schema({
  timeline: String,
  category: String,
  description: String,
  cost: Number,
  comments: String
});

// Compile model from schema
var MillPlanModel = mongoose.model('MillPlan', MillPlan );

module.exports = MillPlanModel;