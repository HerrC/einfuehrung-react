'use-strict';

import { Message } from './Message.js';

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      headline: "\xDCberschrift 1",
      text: "Darunter"
    }), /*#__PURE__*/React.createElement(Message, {
      headline: "\xDCberschrift 2",
      text: "Wieder darunter"
    }));
  }

}

const domTarget = document.querySelector('#my-react-app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);