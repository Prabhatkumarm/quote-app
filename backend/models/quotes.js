const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author: String,
    quote: String
});



module.exports =mongoose.model('Quote',quoteSchema);