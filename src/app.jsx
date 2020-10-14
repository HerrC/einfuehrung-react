'use-strict';

import { Message } from './Message.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Message headline="Überschrift 1" text="Darunter" />
                <Message headline="Überschrift 2" text="Wieder darunter" />
            </div>
        );
    }
}

const domTarget = document.querySelector('#my-react-app');
ReactDOM.render(<App />, domTarget);