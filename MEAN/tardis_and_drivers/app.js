/**
 * Created by amarinas on 3/9/17.
 */
var fs = require('fs'),
    http = require('http'),
    port = 7077;

var server = http.createServer(function(req, res) {
    var checkurl = req.url.split('/'),
        root = checkurl[1];


    switch (root) {
        case "styles":
            serveCss(checkurl[2], res);
            break;
        case "images":
            serveJpg(checkurl[2], res);
            break;
        default:
            switch (checkurl[1]) {
                case "tardis":
                    if (checkurl[2]==='new'){
                        serveHtml('new.html', res);
                    }else{
                        serveHtml('tardis.html', res);
                    }
                    break;
                case "drivers":
                    serveHtml('drivers.html', res);
                    break;
                case "new":
                    serveHtml('new.html', res);
                    break;
                default:
                    serve404(res);
            }


    }
});

function serveHtml(name, res){
    fs.readFile('views/'+ name, 'utf8', function(err, contents){
        if (err) {console.log(err);}
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(contents);
        res.end();
    } )
}
function serveCss(name, res){
    fs.readFile('stylesheets/'+ name, 'utf8', function(err, contents){
        if (err) {console.log(err);}
        res.writeHead(200,{'Content-type': 'text/css'});
        res.write(contents);
        res.end();
    } )
}
function serveJpg(name, res) {

    fs.readFile('images/'+ name, function(err, contents){
        if (err) {console.log(err);}
        res.writeHead(200,{'Content-type': 'image/jpg'});
        res.write(contents);
        res.end();
    });
}

function serve404(res){
    res.writeHead(404);
    res.end('file not found');

}
server.listen(7077);
console.log('Running on port:', port);
