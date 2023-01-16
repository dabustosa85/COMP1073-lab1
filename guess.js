// STEP 1: Initialize game variables
// STEP 1a: Pick random number
let randomNumber = Math.floor(Math.random() * 50) + 1;
// STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
const guessesLeft = document.querySelector('#guessesLeft');
const guesses = document.querySelector('#guesses');
const lastResult = document.querySelector('#lastResult');
const lowOrHi = document.querySelector('#lowOrHi');
// STEP 1c: Create variables to represent the guessing form
const guessField = document.querySelector('#guessField');
const guessSubmit = document.querySelector('button');

// STEP 1d: Create variables to initialize counter for number of guesses
let guessCount = 1;

// STEP 2: Put focus on the field that allows user to type in guesses
guessField.focus();

// STEP 3: Build a function to check the user's guess
function checkGuess() {
    // STEP 3b: Create a variable to contain what number the user entered
    let userGuess = Number(guessField.value);
    console.log(userGuess);
    // STEP 3c: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
    if (guessCount === 1) {
        guesses.textContent = `Previous guesses: `;
    }
    // STEP 3d: Add the user's current guess to that list, plus a space
    guesses.textContent += `${userGuess} `;

    //Output a message that indicates how many guesses the player has left.
    guessesLeft.textContent = `Guesses left: ${10 - guessCount}`;

    // Count how many tries left and put into the guesses textContent

    // STEP 3e: Conditional - the user guessed correctly
    if (userGuess === randomNumber) {
        // Output a success message, then end the game
        lastResult.textContent = `You guessed the number correctly!`;
        lastResult.style.backgroundColor = `green`;
        gameOver();
        // STEP 3f: Conditional - the user is all out of guesses
    } else if (guessCount === 10) {
        // Output an appropriate message, then end the game
        lastResult.textContent = `You are all out of guesses. Game over.`;
        lastResult.style.backgroundColor = `red`;
        gameOver();
        // STEP 3g: Conditional - the user's guess is incorrect
    } else {
        // Output an appropriate message
        lastResult.textContent = `Nope!`;
        lastResult.style.backgroundColor = `orange`;
        // If the guess is too low, let the user know
        if (userGuess < randomNumber) {
            lowOrHi.textContent = `Too low.`
            lowOrHi.style.textTransform = `lowercase`;
            // Else if the guess is too high, let the user know
        } else {
            lowOrHi.textContent = `Too high.`;
            lowOrHi.style.textTransform = `uppercase`;
        }
    }
    // STEP 3h: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
    guessCount++;
    guessField.value = ``;
    guessField.focus();
};
// STEP 4: Build a function called gameOver() to end the game
function gameOver() {
    // STEP 4a: Disable the guessing field and submit button
    guessField.disabled = true;
    guessSubmit.disabled = true;
    // STEP 4b: Change the textContent of the #lowOrHi paragraph to a short phrase indicating that the game is over, and that the user can start a new game by refreshing the browser page or tab
    lowOrHi.textContent = `Please refresh the browser page or tab to play again.`;
};
// STEP 3a: Add an event listener for the guess form button that calls the checkGuess function, then test that the event listener is working and that it invokes the function
guessSubmit.addEventListener('click', checkGuess);

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash