import React from 'react'
import ReactDOM from 'react-dom';
import {connect}  from 'react-redux';

import * as actions from '../actions/index';
import store from '../store';


export class Guess extends React.Component {
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
                    <input type="text" ref="myInput" /><br />
                    <input type="submit" value="Guess"/>
                </form>
            </div>    
        )
    }
}

const mapStateToProps = (state, props) => ({
    data: state
});

export default connect(mapStateToProps)(Guess);
