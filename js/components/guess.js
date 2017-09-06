import React from 'react'
import ReactDOM from 'react-dom';

import * as actions from '../actions/index';
import store from '../store';


export default class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }   
    
    onFormSubmit(e) {
        e.preventDefault();
        let numberGuessed = this.refs.myInput.value;
        console.log(numberGuessed);
        store.dispatch(actions.guessNumber(numberGuessed));
    }    

    render() {
        return (
            <div className="guess">
                <form ref="guessInput" onSubmit={this.onFormSubmit}>
                    <input type="text" ref="myInput" />
                    <input type="submit" value="submit" />
                </form>
            </div>    
        )
    }
}

