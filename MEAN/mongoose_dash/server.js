/**
 * Created by amarinas on 3/14/17.
 */
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded(true));
app.use(express.static(path.join(__dirname, "./static")));
console.log(__dirname);

app.set('views', path.join(__dirname, "./views"))
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dash');

var AnimalSchema =  new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    breed: {type: String, required: true, minlength:3},
    color: {type: String, required: true, minlength:3}
},{timestamps: true})

mongoose.model('Animal', AnimalSchema);
var Animal =  mongoose.model('Animal')

mongoose.Promise = global.Promise;

//Routes
//root request
// show all
//get URL
app.use(function(req, res, next) {
    req.getUrl = function() {
        return "(" + req.method + ") " + req.protocol + "://" + req.get('host') + req.originalUrl;
    }
    console.log("Request: " + req.getUrl());
    //console.log('request: ', req )
    return next();

});

app.get('/', function(req, res){
     Animal.find({}, function (err, animals) {
        if (err){console.log(err);}
        res.render('index',{animals: animals})
});
});
//send to the new form
app.get('/new', function (req, res) {

    res.render('new')
})
//send to edit screen
app.get('/:id/edit', function (req,res) {

    Animal.find({_id:req.params.id}, function (err, animals) {
        if (err){console.log(err);}
        res.render('edit',{animals: animals[0]});
    });
})
//update
app.post('/:id', function(req,res){
    console.log(req.body);
    Animal.update({_id:req.params.id}, req.body, function(err,animals){
        if (err){consile.log(err);}
        res.redirect('/');

    })
})

//delete animal

app.post('/:id/delete', function(req,res){
    Animal.remove({_id:req.params.id}, function(err,animals){
        if (err){consile.log(err);}
        res.redirect('/')
    })

})
//show all
app.get('/shows/:id', function(req,res){
    Animal.find({_id:req.params.id}, function (err, animals) {

        if (err){console.log(err);}
        console.log(animals[0].name)

        res.render('shows',{animals: animals[0]});
    });
})



// add new animal
app.post("/mongoose/new", function (req,res) {
    console.log("Post Data",req.body);
    var addAnimal = new Animal({name: req.body.name, breed: req.body.breed, color: req.body.color});
    addAnimal.save(function (err) {
        if(err){
            console.log('item was not added in the database')
        }else{
            console.log('added the animal in the database')
        }

    })
    res.redirect('/');
})



//setting our server to listen on port 7700
app.listen(8800, function () {
    console.log('listening on port 8800 for project mongoose dash');
})
