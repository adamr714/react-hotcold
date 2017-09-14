import * as actions from '../actions/index';
import store from '../store';

const initialState={
    randomNumber: 0,
    gameStarted: false,
    };

export const guessReducer = (state=initialState, action) => {   
    if (action.type === actions.GUESS_NUMBER) {
        return guessNumber(action, state);
    }

    else if (action.type === actions.TARGET) {

    }


    else if (action.type === actions.PLAY_AGAIN) {       
        console.log('Game Starting');
        var result = startGame();
        return result;  
    }

    return state;
};

function startGame(state) {
    let bob = Object.assign({}, state, {randomNumber: Math.floor((Math.random() * 100) + 1), gameStarted: true});
    console.log('Your target number is ' + bob.randomNumber);
    return bob;
}

function endGame(state) {
    let gameOver = Object.assign({}, state, {gameStarted: false});
    console.log('Game Over');
    return gameOver;
}

function guessNumber(action, state) {
    let message = null;
    
    if (action.guess == state.randomNumber) {
        message = 'You Won!' 
        var endOfGame = endGame();
        return endOfGame;
               
    } 
    else if(action.guess > state.randomNumber) {
        message = 'Too Hot'
    } 
    else {
      console.log(action.guess, state.randomNumber);  
      message =   "Too Cold"
    };

    let newState = Object.assign({}, state, {message: message});
    return newState;
}



