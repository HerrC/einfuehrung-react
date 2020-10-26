import React, { Component } from 'react';

class InterestedInput extends Component {
    render() {
        return (
            <div>
                <label htmlFor='interested'>Bist du eine interessierte Person?</label>
                <input name="interested" id='interested' type="checkbox"
                    checked={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

export default InterestedInput;