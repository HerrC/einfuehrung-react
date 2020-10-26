import React, { Component } from 'react';

class Tab extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.headline}</h1>
                <article>
                    {this.props.children}
                </article>
            </div>
        );
    }
}

export default Tab;