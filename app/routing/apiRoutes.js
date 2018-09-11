var friends = require("../data/friends.js");


module.exports = function(app){

    // Route that displays a JSON of all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    // POST route that handles incoming survey data and responds with your companion
    app.post("api/friends", function(req, res){


    })
}