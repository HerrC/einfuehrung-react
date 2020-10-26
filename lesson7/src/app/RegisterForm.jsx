import React, { Component } from 'react';
import InterestedInput from './InterestedInput';
import NameInput from './NameInput';
import SexInput from './SexInput';

const emptyForm = {
    name: '',
    sex: 'w',
    interested: true,
    formSubmitted: false
}

class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = emptyForm;

        // wegen handleChange wo wir auf this. zugreifen -> müssen wir this bekannt machen
        // wir überschreiben die onChange methode
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        this.setState({
            formSubmitted: true
        })
    }

    resetForm(event) {
        this.setState(emptyForm);
    }

    render() {

        if (this.state.formSubmitted) {
            return (
                <div>
                    <h2>Formular abgeschickt.</h2>
                    <button onClick={this.resetForm}>Weiteren Teilnahmer anmelden.</button>
                </div>

            );
        } else {
            return (
                <div>
                    <NameInput value={this.state.name} onChange={this.handleChange} />
                    <SexInput value={this.state.sex} onChange={this.handleChange} />
                    <InterestedInput value={this.state.interested} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>Abschicken</button>
                </div>
            );
        }
    }
}

export default RegisterForm;