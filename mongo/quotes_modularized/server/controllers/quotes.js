var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    show: function(req, res) {
        Quote.find( {}, function (err, quotes) {
            if(err) {
                console.log("Something went wrong");
                res.render('quotes');
            } else {
                res.render('quotes', {quotes: quotes});
            }
        }).sort({'_id': -1});
    },

    create: function(req, res) {
        var quote = new Quote({ name: req.body.name, quote: req.body.quote});
        quote.save(function(err){
            if(err) {
                console.log('something went wrong');
                res.render('index', {errors: err});
            } else {
                res.redirect('/quotes');
            }
        })
    }

}