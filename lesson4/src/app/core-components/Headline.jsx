import React from 'react';
import './Headline.css'

export class Headline extends React.Component {
    render() {
        return <h2 className="headline"> { this.props.headline } </h2>
    };
}       

