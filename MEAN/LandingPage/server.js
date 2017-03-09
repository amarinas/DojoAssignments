/**
 * Created by amarinas on 3/8/17.
 */
var fs = require('fs'),
    http = require('http'),
    port = 6789;

var server = http.createServer(function server(req, res) {
    var file;

    switch(req.url){
        case "/":
            file ='index.html'
            break;
        case "/ninjas":
            file ='ninjas.html'
            break;
        case "/dojos/new":
            file ='dojos.html'
            break;
        default:
            file = null;
            break;

}

if (file !== null){
    fs.readFile('static/' + file, 'utf8', function(err,contents){
        if (err){console.log(err);}
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(contents);
        res.end();
    });
} else{
    res.writeHead(404);
    res.end('file not found!');
}
});


server.listen(port, function () {
    console.log('Running on port:', port);

});