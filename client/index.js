require('es6-promise').polyfill();
import 'jquery';
import 'popper.js'
import 'tether';
import 'bootstrap';
import './Scripts/googleAnalytics.js';
import './css/bootstrap.min.css';
import './css/countdown.css';
import './css/toggleButton.css';
import './css/style.css';
import './css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App.jsx';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));