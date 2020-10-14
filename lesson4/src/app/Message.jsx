import React from 'react';
import { Paragraph } from "./core-components/Paragraph";
import { Headline } from "./core-components/Headline";

export class Message extends React.Component {
    render() {
        return (
            <div>
            <Headline headline={this.props.headline}/> 
            <Paragraph text={this.props.text}/>
            </div>
        );
    }
}