import React from 'react';
import ReactDOM from 'react-dom';
import './Listing/styles/index.css';
import App from './Listing/components/Listing';
import registerServiceWorker from './Listing/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
