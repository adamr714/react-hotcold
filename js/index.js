require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import GuessContainer from './components/guess-container';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <GuessContainer />
        </Provider>,
        document.getElementById('app')
    )
);

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(<GuessContainer />, document.getElementById('app'));
// })
