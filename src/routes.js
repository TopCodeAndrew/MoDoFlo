import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './1-Components/Landing'
import Register from './1-Components/Register'
import Login from './1-Components/Login'
import Dashboard from './1-Components/Dashboard'
import Session from './1-Components/Session'
import WorkBlock from './1-Components/WorkBlock'
import BreakBlock from './1-Components/BreakBlock'


export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard/:session_id' component={Session} />
        <Route exact path='/dashboard/:session_id/:block_id/1' component={WorkBlock} />
        <Route exact path='/dashboard/:session_id/:block_id/2' component={BreakBlock} />
        <Route path='/'> Error: This page does not exist</Route>
    </Switch>
)