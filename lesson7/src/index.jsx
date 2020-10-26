import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App';


const domTarget = document.querySelector('#my-react-application');

ReactDOM.render(
    <App />, 
    domTarget
);