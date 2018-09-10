# Friend Finder
Constructor Word Guess Game in Node

<!-- Put a description of what the project is -->
This is a hangman game, but with pokemon. Guess the pokemon.


# Link to deployed site
[GitHub](https://github.com/atton88/Constructor-Word-Guess)

# Images
![Guess](Capture.PNG)

# technology used
- Javascript
- Node.js
- NPM: inquirer

# code snippets

Play game code is not much when most of the functionality is in the constructor objects
```
function playGame() {
    console.log("----------------------------\n");
    inquirer.prompt([{
        type: "input",
        message: "Guess a letter!",
        name: "guess",
        validate: function(guess) {
            if (guess.length === 1 && isNaN(parseFloat(guess))){
                return !lettersGuessed.includes(guess.toUpperCase());
            } else {
                return false;
            }
        }
    }]). then (function(answer) {
        var guess = answer.guess.toUpperCase();
        lettersGuessed.push(guess);
        poke.guessLetter(guess);
        console.log("\n" + poke.toString() + "\n");
        if (poke.isSolved()){
            console.log("YOU WIN!");
            console.log("Next Game");
            startGame();
        } else {
            playGame();
        }
    })
}
```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- Learned more node.js
- Learned to use constructor function to be more efficient with coding
- Learned to import and require other js files

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Andrew Ton](https://github.com/atton88)

# License
Standard MIT License