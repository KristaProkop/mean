var express = require('express');

var app = express();

// STD FORMAT: app.HTTP_VERB("URL", function (req, res){});

// root route
// app.get('/', function (req, res){
//   res.render('index', {title: "my Express project"});
// });

// // route to process new user form data:
// app.post('/users', function (req, res){
//   //code to add user to db goes here!
// })

// redirect:
// // root route
// app.get('/', function (req, res){
//   res.render('index', {title: "my Express project"});
// });
// // route to process new user form data:
// app.post('/users', function (req, res){
//   // code to add user to db goes here!
//   // redirect the user back to the root route. 
//   // All we do is specify the URL we want to go to:
//   res.redirect('/');
// })

// POST data: 
// npm install body-parser
// // require body-parser
// var bodyParser = require('body-parser');
// // use it!
// app.use(bodyParser.urlencoded({extended: true}));

// get form data 
// // route to process new user form data:
// app.post('/users', function (req, res){
//     console.log("POST DATA \n\n", req.body)
//     //code to add user to db goes here!
//     // redirect the user back to the root route.  
//     res.redirect('/')
// });

// get data of specific user
// app.get("/users/:id", function (req, res){
//     console.log("The user id requested is:", req.params.id);
//     // just to illustrate that req.params is usable here:
//     res.send("You requested the user with id: " + req.params.id);
//     // code to get user from db goes here, etc...
// });



app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    response.send("<h1> Hello Express! </h1>");
})


app.get('/users', function (request, response) {
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: 'brendan@codingdojo.com'}
    ];
    response.render('users', {users: users_array});
});


app.listen(8000, function() {
    console.log("listening on port 8000");
})