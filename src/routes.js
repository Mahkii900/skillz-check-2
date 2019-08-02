import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wizard from './components/Wizard/Wizard'
import Dashboard from './components/Dashboard/Dashboard'

export default <Switch>
    <Route component={Dashboard} exact path={'/'}/>
    <Route component={Wizard} path={'/wizard'}/>
</Switch>