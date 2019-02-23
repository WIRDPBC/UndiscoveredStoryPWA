/**
 * Created By Nikita Mittal
 * 27th Jan 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'; 

//import css
import './Login.css'
//import components
import AuthContainer from '../AuthContainer'
import LoginForm from './LoginForm'

class Login extends PureComponent{
    render(){
        return (
            <Fragment>
                <AuthContainer>
                    <LoginForm />
                </AuthContainer>
            </Fragment>
        )
    }
}


export default Login