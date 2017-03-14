/**
 * Created by amarinas on 3/13/17.
 */
// express module
var express = require('express');
//create an express app
var app = express();
//body-parser(recieve postdata from clients(users))
var bodyParser = require('body-parser');
//intergrate body-parser with express(app)
app.use(bodyParser.urlencoded({extended: true}));
//require path
var path = require('path');
//static folder directory
app.use(express.static(path.join(__dirname, "./static")));
//setting our view engine set to ejs
app.set('view engine', 'ejs');
//require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
}, {timestamps: true})

mongoose.model('User',UserSchema); //setting this schema in our models as 'user'
var User = mongoose.model('User') //we are retrieving this schema from our models, named 'User'

//Routes
//root request

app.get('/', function(req,res){
    //this is where we will retrieve the users from the database and include them in the view page we will be rendering
    User.find({}, function(err,users){
    })
    res.render('index')
})

// find user
app.post('/find', function (req,res) {
    console.log('POST DATA', req.body)
    //this will find if specific user exists
    User.find({name: 'POST DATA'}, function(err,user){
        if (err){
            console.log('no match found');
        }else{
            console.log('found user');

            res.redirect('/');
        }

    })



})

//Add user request;
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    //this is where we would add the user from req.body to the database

    var user = new User({name: req.body.name, age: req.body.age});
    //save that new user to the database and run a callback func with an error
    user.save(function (err) {
        //if there is an error console.log
        if(err){
            console.log('something went wrong');
        }else{
            console.log('successfully added user');

            res.redirect('/');
        }
    })

})
//setting our server to listen on port 7700
app.listen(7700, function () {
    console.log('listening on port 7700 for project basic mongoose app');
})
