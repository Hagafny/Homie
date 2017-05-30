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
import App from './Components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));