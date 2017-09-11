import * as actions from '../actions/index';
import store from '../store';

// const initialState = Math.floor((Math.random() * 100) + 1);
const initialState={
    gameStarted: false,
    };

// const reducer = (state, action) => {
//     state = state || initialState;
//     return {
//         guess: boardReducer(state.guess, action),
//     };
// }


export const guessReducer = (state=initialState, action) => {
    // debugger;
    if (action.type === actions.GUESS_NUMBER) {
        return guessNumber(action, state);
    }

    else if (action.type === actions.TARGET) {

    }


    else if (action.type === actions.PLAY_AGAIN) {
        console.log('Game Starting');
        return {gameStarted:true};   
    }

    return state;
};

function guessNumber(action, state) {
    console.log(action);
    let newState = Object.assign(state, {message:`Your guess is: ${action.guess}`}); 
    debugger;
    return newState;
}