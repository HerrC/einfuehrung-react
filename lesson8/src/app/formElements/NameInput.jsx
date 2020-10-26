import React, { Component } from 'react';

class NameInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' 
                    name='name'
                    type="text" 
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default NameInput;