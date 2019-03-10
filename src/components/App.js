import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Repos from './Repos';
import Dashboard from './Dashboard';
import HeavyComponent from './HeavyComponent';


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/user/:userName" component={Repos} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;