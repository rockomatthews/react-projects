import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';


ReactDOM.render((
<Provider store={store}>
    <Router history={hashHistory}>
        <Route Path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="login" component={Login} /> 
        </Route>
    </Router>
</Provider>
), document.getElementById('root'));