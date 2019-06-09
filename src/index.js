import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

// todo, where is bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';


import App from './containers/App';


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
