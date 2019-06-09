import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Single from "./Single";

export default class App extends Component {
    render() {
        return (
    
            <Router>
                <Switch className="container-fluid">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Single" component={Single}/>

                </Switch>
            </Router>
        );
    }
}
