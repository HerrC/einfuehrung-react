import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


export class App extends Component {
    render() {
        return (
            <div>
                <h1>Anmeldeformular für React-Workshop</h1>
                <RegisterForm />
            </div>
        );
    }
}

