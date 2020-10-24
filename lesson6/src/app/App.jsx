import React, { Component } from 'react';
import Counter from './Counter';
import CounterContainer from './CounterContainer';
import { CounterPure } from "./CounterPure";
import CounterStateless from './CounterStateless';

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Counter />
                <CounterPure />
                <CounterContainer />

            </div>
        );
    }
}

