// Generate a random number
export const RANDOM_NUMBER = 'RANDOM_NUMBER';
export const randomNumber = random => ({
    type: RANDOM_NUMBER,
    random
});

// Guess a number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
    type: GUESS_NUMBER,
    guess
});

const action = guessNumber('You Guessed [X]');

// If the number is further from the random number
export const COLDER = 'COLDER';
export const further = lowGuess => ({
    type: CODLER,
    lowGuess
});

const action = tooLow('You Are Getting Colder');


// If the number is closer from the random number
export const HOTTER = 'HOTTER';
export const closer = closerGuess => ({
    type: HOTTER,
    closerGuess
});

const action = closer('You Are Getting Hotter');

// If the number is exact - tell them they won 
export const TARGET = 'TARGET';
export const onTarget = exact => ({
    type: 'TARGET',
    exact
});

const action = exact("Congrats...you guessed the random number....here's a cookie");

// Let them play again
export const PLAY_AGAIN = 'PLAY_AGAIN';
export const restart = playAgain => ({
    type: PLAY_AGAIN,
    playAgain
});