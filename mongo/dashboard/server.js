var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/animals');

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    family: {type: String, required: true},
    color: {type: String, required: true},
    lifespanYears: {type: String, required: true}
}, {timestamps: true});
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal');

mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
    Animal.find( {}, function(err, animals) {
        if(err) {
            console.log("No animals found");
            res.redirect('/animals/new');
        } else {
            res.render('index', {animals: animals});
        }
    })
})

app.get('/animals/new', function(req, res) {
    res.render('newAnimal');
})

app.post('/animals/', function(req, res) {
    var animal = new Animal({ name: req.body.name, family: req.body.family, color: req.body.color, lifespanYears: req.body.lifespanYears});
    animal.save(function(err) {
        if (err) {
            console.log(err);
        } 
    res.redirect('/');
    })
})

app.get('/animals/:id', function(req, res) {
    Animal.find({ _id: req.params.id}, function(err, animal) {
        if(err){
            console.log('error retrieving animal');
            res.redirect('/');
        } else {
            res.render('showAnimal', {animal: animal});
        }
    })
});

app.get('/animals/edit/:id', function(req, res) {
    Animal.find({_id: req.params.id}, function(err, animal) {
        if(err) {
            console.log('error retrieving animal');
            res.redirect('/');
        } else {
            res.render('editAnimal', {animal: animal});
        }
    })
})

app.post('/animals/:id', function(req, res) {
    Animal.update({_id: req.params.id}, {$set: {name: req.body.name, family: req.body.family, color: req.body.color, lifespanYears: req.body.lifespanYears} }, function(err) {
        if(err){
           console.log("error updating animal");
           
        } 
        res.redirect('/animals/'+req.params.id);
    })
})

app.post('/animals/destroy/:id', function(req, res){
    Animal.remove( { _id: req.params.id }, function(err, animal) {
        if (err) {
            console.log('error retrieving animal');
            res.redirect('/animals/'+req.params.id)
        } 
        res.redirect('/');
    })
})

app.listen(8000, function() {
    console.log('listening on port 8000');
})