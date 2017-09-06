import * as actions from '../actions/index';
import store from '../store';

// const initialState = Math.floor((Math.random() * 100) + 1);
const initialState=[];

// const reducer = (state, action) => {
//     state = state || initialState;
//     return {
//         guess: boardReducer(state.guess, action),
//     };
// }


export const guessReducer = (state=initialState, action) => {
    if (action.type === actions.GUESS_NUMBER) {
   
    }

    else if (action.type === action.TARGET) {

    }

    else if (action.type === action.COLDER) {
    }

    else if (action.type === action.HOTTER) {
        
    }

    else if (action.type === action.PLAY_AGAIN) {
          
    }
    return state;
};