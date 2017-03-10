/**
 * Created by amarinas on 3/10/17.
 */
//load express, path, body-parser
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

//invoke var express and sotre app in var app
var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
console.log(__dirname);

//setting up ejs and views folder
app.set('views', path.join(__dirname, "./views"))
app.set('view engine', 'ejs');

//routes/index.js handle all of the routing
var route = require('./routes/index.js')(app);
app.listen(3000, function(){
    console.log('listenig on port 3000  survey_form project')
})