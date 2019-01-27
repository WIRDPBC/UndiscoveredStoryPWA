import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
import GetStarted from '../GetStarted'
import Login from '../Login'
import Signup from '../Signup'

function MainApp(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={GetStarted} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
               
            </Switch>
        </div>



    )
}


export default MainApp