import React, { PureComponent } from 'react';

export class CounterPure extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0
        }

        //this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState(state => {
            return {
                counterValue: state.counterValue + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h3>CounterPure</h3>
                <p>Counter value is: {this.state.counterValue}</p>
                <button onClick={() => this.onClick()}>Klick mich</button>
            </div>
        );
    }
}

export default CounterPure;