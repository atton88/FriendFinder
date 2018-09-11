var friends = require("../data/friends.js");

module.exports = function(app){

    // Route that displays a JSON of all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    // POST route that handles incoming survey data and responds with your new pal
    app.post("/api/friends", function(req, res){

        // convert new scores arr to numbers
        req.body.scores = req.body.scores.map(Number);

        // Match Logic
        var newScores = req.body.scores;
        var matches = {sum:[]};

        console.log(typeof newScores[0])

        // For each new friend find the difference
        friends.forEach(function(elem) {
          var friendScores = elem.scores;

          // Calculate the differences in arrays
          var differenceArr = newScores.map(function(score, index){
            return Math.abs(score - friendScores[index])
          })


          // get sum
          var sum = 0;
          differenceArr.forEach(function(elem){
            sum += elem;
          })

          console.log(differenceArr, sum) //test


          // check for high sum and replace if higher
          if (!matches.sum[0] || matches.sum[0].rating < sum) {
            matches.sum[0] = {
              friend: elem,
              rating: sum
            }
            // console.log(matches)
          } else if (matches.sum[0].rating === sum) { // will enter ties
            matches.sum.push({
              friend: elem,
              rating: sum
            })


          }

        })

        console.log("test")
        console.log(matches)

        friends.push(matches);
        res.json(matches);
        // console.log(friends) //test

    })
}