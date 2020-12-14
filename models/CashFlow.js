// Require mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

    var CashFlow = new Schema({
        date: Date,
        description: String,
        time: String,
        cash: String,
    });

// Compile model from schema
var CashFlowModel = mongoose.model('CashFlow', CashFlow);

module.exports = CashFlowModel;