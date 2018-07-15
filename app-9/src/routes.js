import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Signup from './routes/Signup';
import Details from './routes/Details';

export default (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/signup' component={Signup} />
    <Route path='/details' component={Details} />
    </Switch>
)
