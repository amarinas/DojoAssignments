/**
 * Created by amarinas on 3/11/17.
 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");


 var server = app.listen(5000, function(){
    console.log("listening on port 5000 survey form revisited project");
})

var route = require("./routes/index.js")(app, server);


