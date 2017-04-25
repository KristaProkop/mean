Mongoose Setup

mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
    User.find( {}, function(err, users){
        if(err) {
            console.log("something went wrong");
            res.render('index');
        } else {
            console.log(users);
            res.render('index', {users: users});
        }
    })
})

app.post('/users', function(req, res) {
    console.log('POST DATA', req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added user');
            res.redirect('/');
        }
    })
})



// ...retrieve all records matching {name:'Jessica'}
User.find({name:'Jessica'}, function(err, user) {
})

// ...retrieve 1 record (the first record found) matching {} 
User.findOne({}, function(err, user) {
})

// ...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){
 // This code will run when Mongo has attempted to save the record.
 // If (err) exists, the record was not saved, and (err) contains validation errors.
 // If (err) does not exist (undefined), Mongo saved the record successfully.
})

// ...delete all records of the User Model
User.remove({}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {}
})

// ...delete 1 record by a certain key/vaue.
User.remove({_id: 'insert record unique id here'}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
})

// ...update any records that match the query
User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){
 // This code will run when the DB has attempted to update the matching record.
})
// another way to update a record
User.findOne({name: 'Andriana'}, function(err, user){
 user.name = 'Andri'
 user.save(function(err){
     // if save was successful awesome!
 })
})