import * as actions from '../actions/index';
import store from './store';

const initialRepoistoryState = Math.floor((Math.random() * 100) + 1);

const reducer = (state, action) => {
    state = state || initialState;
    return {
        guess: boardReducer(state.guess, action),
    };
}

export const repositoryReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.GUESS_NUMBER) {
        return [...state, {
            name: action.guess
        }];        
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