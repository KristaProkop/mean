var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
})


var server = app.listen(8000, function() {
    console.log('listening on port 8000');
}); 

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    socket.on("data", function (inputs){
        socket.emit('server_response', {
            name: inputs.name,
            location: inputs.location,
            language: inputs.language,
            comment: inputs.comment
        });
    });  
})

