var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');


mongoose.connect('mongodb://localhost/quotes');

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    quote: { type: String, required: true, minlength: 10}
}, {timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);
