// word.js should contain all of the methods which will check the letters 
//guessed versus the random word selected.

var wordsList   = ["Cat", "Penguin", "Lion", "Giraffe", "Tiger", "Elephant", "Panda", "Polar Bear", "Zebra", "Monkey", "Cheetah", "Shark", "Kangaroo"];
var chosenWord  = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array
var numBlanks	= 0; // This will be the number of blanks we show based on the solution
var blanksAndSuccesses = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _') 


function startGame() {
	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
	lettersInChosenWord = chosenWord.split(""); 
	numBlanks = lettersInChosenWord.length; 

	console.log(chosenWord)

	blanksAndSuccesses = []; 
	wrongGuesses = []; 

	for (var i=0; i <numBlanks; i++){
		blanksAndSuccesses.push("_");
}

for (var i=0; i <numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses); // print the initial blanks in console.


	
	
	document.getElementById("wordblanks").innerHTML= blanksAndSuccesses.join(" ");

	document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");



}

function checkLetters(letter) {

	var letterInWord = false; 
	for (var i=0; i<numBlanks; i++) {
		if(chosenWord[i] == letter) {
			letterInWord = true; 
 		}
	}
	if(letterInWord){
	
		// loop through the word 
		for (var i=0; i<numBlanks; i++){

			// Populate the blanksAndSuccesses with every instance of the letter.
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
			}
		}
		console.log(blanksAndSuccesses); // logging for testing
	}
	// If the letter doesn't exist at all...
	else {
		wrongGuesses.push(letter); // then we add the letter to the list of wrong letters
		numGuesses--; // and we subtract one of the guesses
	}
}



	
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

	
	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); // This will print the array of guesses and blanks onto the page
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" "); // this will print the wrong guesses onto the page.

	
	if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
		winCounter++; // add to the win counter 
		alert("You win!"); // give the user an alert

		// Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML= winCounter;
		startGame(); // restart the game 
	}

	// If we've run out of guesses
	else if(numGuesses == 0) {
		lossCounter++; 	 // add to the loss counter 
		alert("You lose"); // give the user an alert

		// Update the loss counter in the HTML
		document.getElementById("lossCounter").innerHTML= lossCounter; 
		startGame(); // restart the game
	}

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr
	
	checkLetters(letterGuessed); // runs the code to check for correctness 
	roundComplete(); // runs the code after each round is done
}