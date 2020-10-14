import React from 'react';
import { Message } from './Message';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Message headline="Überschrift 1" text="Darunter" />
                <Message headline="Überschrift 2" text="Wieder darunter" />
                <Message headline="Überschrift 3" text="Das ist ja super" />
                <Message headline="Überschrift 4" text="Jo mei aaaaa!" />
            </div>
        );
    }
}

