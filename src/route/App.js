import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Introduce } from '../pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route exact path="/introduce" component={Introduce}/>
            </div>
        );
    }
}

export default App;