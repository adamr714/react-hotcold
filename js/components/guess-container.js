import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import * as actions from '../actions/index';
import store from '../store';

import Guess from './guess';

export class GuessContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        store.dispatch(actions.restart());
    }

    render() {
        // debugger;
        let guessComponent=null;
        if (this.props.gameStarted) {
            guessComponent = <Guess/>
        }   
        else {
            guessComponent = <button type="button" onClick={this.onClick}>Replay</button>
        }         
        return (
            <div className="guessContainer">
                <div className="message">
                    {this.props.message}
                </div>
                {guessComponent}
            </div>    
        )
    };
}

const mapStateToProps = (state, props) => ({
    data: state,
    message: state.message,
    gameStarted: state.gameStarted
});

export default connect(mapStateToProps)(GuessContainer);