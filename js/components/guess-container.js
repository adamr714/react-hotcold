import React from 'react'
import ReactDOM from 'react-dom';

import Guess from './guess';

export default class GuessContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="guessContainer">
                <div className="message">
                </div>
                <Guess />
            </div>    
        )
    };
}
