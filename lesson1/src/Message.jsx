'use-strict';

import { Paragraph } from "./Paragraph.js";
import { Headline } from "./Headline.js";

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