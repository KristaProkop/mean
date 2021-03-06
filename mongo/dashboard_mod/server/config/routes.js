var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
var animals = require('../controllers/animals.js');

module.exports = function(app) {

    app.get('/', function(req, res) {
        animals.showAll(req, res);
    })

    app.get('/animals/new', function(req, res) {
        res.render('newAnimal');
    })

    app.post('/animals/', function(req, res) {
        animals.create(req, res);
    })

    app.get('/animals/:id', function(req, res) {
        animals.showOne(req, res);
    });

    app.get('/animals/edit/:id', function(req, res) {
        animals.edit(req, res);
    })

    app.post('/animals/:id', function(req, res) {
        animals.update(req, res);
    })

    app.post('/animals/destroy/:id', function(req, res){
        animals.destroy(req, res);
    })
}