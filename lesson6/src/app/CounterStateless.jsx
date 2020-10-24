import React, { PureComponent } from 'react';

export class CounterStateless extends PureComponent {

    render() {
        return (
            <div>
                <h3>CounterStateless</h3>
                <p>Counter value is: {this.props.counterValue}</p>
                <button onClick={() => this.props.onClick()}>Eins rauf</button>
            </div>
        );
    }
}

export default CounterStateless;