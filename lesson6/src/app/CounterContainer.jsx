import React, { PureComponent } from 'react';
import CounterStateless from './CounterStateless';
import { CounterReset } from "./CounterReset";

export class CounterContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0
        };
    }

    onIncrement() {
        this.setState (state => {
            return {
                counterValue: state.counterValue + 1
            }
        })
    }

    onReset() {
        this.setState ({
                counterValue: 0
        })
    }

    render() {
        return (
            <div>
                <CounterStateless counterValue={this.state.counterValue} onClick={ () => this.onIncrement()}/>
                <CounterReset counterValue={this.state.counterValue} onClick={ () => this.onReset()} />
            </div>
        );
    }
};

export default CounterContainer;