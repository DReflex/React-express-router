import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import registerServiceWorker from './registerServiceWorker';
var BrowserRouter = require('react-router-dom').BrowserRouter;

//render app setup BrowserRouter
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
