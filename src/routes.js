import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Session from './Components/Session'


export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard/:session_id' component={Session} />
        <Route path='/'> Error: This page does not exist</Route>
    </Switch>
)