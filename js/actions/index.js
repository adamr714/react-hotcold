// Generate a random number
// export const START_GAME = 'START_GAME';
// export const startGame = (randomNumber) => ({
//     type: START_GAME,
//     startGame: randomNumber
// });

// Guess a number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = (guess) => ({
    type: GUESS_NUMBER,
    guess: guess
});

// If the number is further from the random number
export const COLDER = 'COLDER';
export const further = (guessedNumber) => ({
    type: COLDER,
    guess: guessedNumber
});

// If the number is closer from the random number
export const HOTTER = 'HOTTER';
export const closer = (guessedNumber) => ({
    type: HOTTER,
    guess: guessedNumber
});

// If the number is exact - tell them they won 
export const TARGET = 'TARGET';
export const onTarget = () => ({
    type: 'TARGET'
});

// Let them play again
export const PLAY_AGAIN = 'PLAY_AGAIN';
export const restart = () => ({
    type: PLAY_AGAIN
});