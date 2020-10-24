import React, { Component } from 'react';

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0
        }

        //this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState(state => {
            state.counterValue++;
            return state;
        })
    }

    render() {
        return (
            <div>
                <h3>Counter</h3>
                <p>Counter value is: {this.state.counterValue}</p>
                <button onClick={() => this.onClick()}>Klick mich</button>
            </div>
        );
    }
}

export default Counter;