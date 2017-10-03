import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
function Clock() {
    ReactDOM.render(<App />, document.getElementById('root'));
}
setInterval(Clock,4000);
registerServiceWorker();
