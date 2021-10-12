import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

function render(App : React.FC) {
    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
}

render(App);