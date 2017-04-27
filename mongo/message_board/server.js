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
    name: {type: String, required: true},
    message: {type: String, required: true},
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');


var CommentSchema = Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true},
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');


mongoose.Promise = global.Promise;


app.get('/', function(req, res) {

    Message.find({}, function(err, messages) {
        if(err){
            console.log("error retrieving messages");
            res.render('index');
        } 
        res.render('index', {messages: messages});
    }).populate('replies'); 
})


app.post('/message/create', function(req, res) {

    var message = new Message({ name: req.body.name, message: req.body.message});

    message.save(function(err) {
        if(err) {
            console.log(err);
        } 
    }) 

    res.redirect('/');
})


app.post('/comment/create', function(req, res) {

    Message.findOne({ _id: req.body.replyTo }, function(err, message){

        if(err){
            console.log("Message not found");
        } else {

            var comment = new Comment({ name: req.body.name, comment: req.body.comment });

            comment.save(function(err) {
                console.log(comment);
                if(err){
                    console.log('Problem saving comment')
                } 
            })

            message.replies.push(comment._id);
            message.save(function(error){
                if(error) {
                    console.log("Problem pushing ref")
                } 
            })
        }
    });

    res.redirect('/');
})


app.listen(8000, function() {
    console.log('listening on port 8000');
})


