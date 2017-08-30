import React from 'react'
import ReactDOM from 'react-dom';

export default class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }   
    
    onFormSubmit(event) {
      event.preventDefault();
    }

    render() {
        return (
            <div className="guess">
                <form ref="guessInput">
                    <input type="text" ref="myInput" onChange={this.onAddInputChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>    
        )
    }
}

