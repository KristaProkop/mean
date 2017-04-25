var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    quote: { type: String, required: true, minlength: 10}
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    Quote.find( {}, function (err, quotes) {
        if(err) {
            console.log("Something went wrong");
            res.render('quotes');
        } else {
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        }
    }).sort({'_id': -1});
})



app.post('/quotes', function(req, res) {
    console.log('POST DATA', req.body);
    var quote = new Quote({ name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err) {
            console.log(err['message']);
            console.log('something went wrong');
            res.render('index', {errors: err});
        } else {
            console.log("successfully added quote");
            res.redirect('/quotes');
        }
    })
    
})

app.listen(8000, function() {
    console.log('listening on port 8000');
})