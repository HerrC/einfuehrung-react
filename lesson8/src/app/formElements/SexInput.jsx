import React, { Component } from 'react';

class SexInput extends Component {
    render() {
        return (
            <div>
                <label htmlFor='sexSelection'>Geschlecht</label>
                <select id='sexSelection' name='sex' value={this.props.value} onChange={this.props.onChange}>
                    <option value="m">Männlich</option>
                    <option value="w">Weiblich</option>
                </select>
            </div>
        );
    }
}

export default SexInput;