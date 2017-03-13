/**
 * Created by amarinas on 3/11/17.
 */
module.exports = function Route(app, server){

    var io = require("socket.io").listen(server)

    app.get('/', function(req, res){
        res.render("index")
    })

    io.sockets.on("connection", function(socket){
        socket.on("posting_form", function(data){
            console.log(data);
            var ran_num = Math.floor((Math.random()*1000)+1);
            console.log(ran_num);
            socket.emit('updated_message', {res: data});
            socket.emit('ran_num',{res: ran_num});
        })
    })
};