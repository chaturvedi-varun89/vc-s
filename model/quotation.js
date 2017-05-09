var mongoose = require('mongoose');

var quotation = new mongoose.Schema({
    quote: String,
    author: String,
    theme: String,
    date: Date,
    tags: String
});

var quotationModel = mongoose.model('quotations', quotation);

module.exports = quotationModel;