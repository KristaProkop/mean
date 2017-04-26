var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, ('/views')));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/messageBoard');


var MessageSchema = Schema({
    _id: Number,
    name: {type: String, required: true},
    message: {type: String, required: true},
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true},
    replyTo: [{ type: Number, ref: 'Message' }]
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
    Message.find({}, function(err, messages) {
        if(err){
            console.log("error retrieving messages");
            res.render('index');
        } else {
            var comments = Comment.find({}, function(errors, comments) {
                if(errors) {
                    console.log("error with comments");
                } else {
                    res.render('index', {messages: messages, comments: comments});
                }
            })
        }
    });

})

app.post('/message/create', function(req, res) {
    console.log(req.body);
    var message = new Message({ _id: 2, name: req.body.name, message: req.body.message});
    message.save(function(err) {
        if(err) {
            console.log(err);
        } 
    }) 
    res.redirect('/');
})

app.post('/comment/create', function(req, res) {
    console.log(req.body);
    var comment = new Comment({ name: req.body.name, comment: req.body.comment, replyTo: req.body.replyTo});
    comment.save(function(err) {
        if(err) {
            console.log(err);
        } 
    }) 
    res.redirect('/');
})

app.listen(8000, function() {
    console.log('listening on port 8000');
})


