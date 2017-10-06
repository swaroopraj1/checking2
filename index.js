import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
function Toggle()
{
    ReactDOM.render(<App />, document.getElementById('root'));
}
setInterval(Toggle,1000);
registerServiceWorker();
