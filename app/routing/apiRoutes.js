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
        var matches = {sum:[], teach:[{rating:0}], learn:[{rating:5}]}; //arrays for future implementation of multiple results

        console.log(typeof newScores[0])

        // For each new friend find the difference
        friends.forEach(function(elem) {
          var friendScores = elem.scores;

          // Calculate the differences in arrays
          var diffArr = newScores.map(function(score, index){
            return score - friendScores[index]
          })


          // get sum for biggest discrepancy in points
          var sum = 0;
          diffArr.forEach(function(elem){
            sum += Math.abs(elem);
          })

          console.log(diffArr, sum) //test


          // check for high sum and replace if higher or equal (to match with newest member)
          if (!matches.sum[0] || matches.sum[0].rating <= sum) {
            matches.sum[0] = {
              friend: elem,
              rating: sum
            }
            // console.log(matches)
          
          // code for including ties to final result
          // } else if (matches.sum[0].rating === sum) { // will enter ties
          //   matches.sum.push({
          //     friend: elem,
          //     rating: sum
          //   })
          }

          // get lowest score, more recent gets priority
          for (var i = 0; i < diffArr.length; i++ ){
            if (diffArr[i] <= matches.learn[0].rating) {
              matches.learn[0] = {
                friend: elem,
                rating: diffArr[i],
                index: i
              }
            }
          }

          // get highest score, more recent gets priority
          for (var i = 0; i < diffArr.length; i++ ){
            if (diffArr[i] >= matches.teach[0].rating) {
              matches.teach[0] = {
                friend: elem,
                rating: diffArr[i],
                index: i
              }
            }
          }

        })

        // console.log("test")
        // console.log(matches)
        // console.log(matches.learn)

        // console.log(req.body);
        friends.push(req.body);
        res.json(matches);
        // console.log(friends) //test

    })
}