require('es6-promise').polyfill();
import 'jquery';
import 'tether';
import 'bootstrap';
import './Scripts/googleAnalytics.js';
import './css/bootstrap.min.css';
import './css/countdown.css';
import './css/toggleButton.css';
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import homieApp from './Reducers'
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App.jsx';


let store = createStore(homieApp);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));