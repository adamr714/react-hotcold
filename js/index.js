require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import GuessContainer from './components/guess-container';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<GuessContainer />, document.getElementById('app'));
})
