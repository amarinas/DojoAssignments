/**
 * Created by amarinas on 3/13/17.
 */
module.export = function Route(app, server){
//Routes
//root request

    app.get('/', function(req,res){
        //this is where we will retrieve the users from the database and include them in the view page we will be rendering
        User.find({}, function(err,users){

        })
        res.render('index')
    })

//Add user request
    app.post('/users', function (req, res) {

        //this is where we would add the user from req.body to the database

        var user = new User({name: req.body.name, age: req.body.age});
        //save that new user to the database and run a callback func with an error
        user.save(function (err) {
            //if there is an error console.log
            if(err){
                console.log('something went wrong');
            }else{
                console.log('successfully added user');
                console.log("POST DATA", req.body);
                res.redirect('/');
            }
        })

    })

}