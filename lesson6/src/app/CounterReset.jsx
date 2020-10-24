import React, { PureComponent } from 'react';

export class CounterReset extends PureComponent {

    render() {

        const disabled = this.props.counterValue == 0;

        return (
            <div>
                <h3>CounterReset</h3>
                <p>Counter value is: {this.props.counterValue}</p>
                <button disabled={disabled}  onClick={() => this.props.onClick()}>Reset</button>
            </div>
        );
    }
}

export default CounterReset;