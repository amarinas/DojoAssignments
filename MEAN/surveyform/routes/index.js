/**
 * Created by amarinas on 3/10/17.
 */
module.exports = function Route(app){
    app.get('/', function (req, res) {
        res.render("index")

    })
    app.post("/result", function(req, res){
        console.log(req.body)
        var postData ={
            name: req.body.name,
            location: req.body.location,
            language: req.body.language,
            Comment: req.body.textbox,
        }
        res.render("result", {user_data: postData})
    })
}