import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import Store from './store';

ReactDOM.render((
<Provider store={Store}>
    <App />
</Provider>
), document.getElementById('root'));