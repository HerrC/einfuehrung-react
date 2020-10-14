'use-strict';

import { Paragraph } from "./Paragraph.js";
import { Headline } from "./Headline.js";
export class Message extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Headline, {
      headline: this.props.headline
    }), /*#__PURE__*/React.createElement(Paragraph, {
      text: this.props.text
    }));
  }

}