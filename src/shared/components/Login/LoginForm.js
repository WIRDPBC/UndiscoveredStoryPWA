/**
 * Created By Nikita Mittal
 * 21st Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Input, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


import {Grid} from 'semantic-ui-react'

import FacebookLogin from '../../icons/FacebookLogin.png'
import GoogleLogin from '../../icons/GoogleLogin.png'
import TwitterLogin from '../../icons/TwitterLogin.png'


class LoginForm extends PureComponent{
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="login-form-container">
                <div className="login-form-heading-container">Undiscovered Story</div>
                <div className="login-form-main-container">
                <div>
                    <Input fluid placeholder="Enter Email"/>
                </div>
                <div className="login-form-passowrd-container">
                    <Input fluid placeholder="Enter Password" type="password"/>
                </div>

                <div className="login-form-signup-forgot-container">
                    <Link to={'/signup'}>
                        <div className="login-form-create-new-account-container">Create new account</div>
                    </Link>
                    <div className="login-form-forgot-password-container">Forgot password?</div>
                </div>

                <div className="login-form-button-container">
                    <Link to={'/home'}>
                    <Button size="medium" style={{width: "150px", height: "40px"}} primary>Login</Button>
                    </Link>
                </div>
                <div className="login-form-login-with-container">Or login with</div>

                <div className="login-form-other-login-container">
                    <img  src={FacebookLogin}/>
                    <img style={{marginLeft: "10px"}} src={TwitterLogin}/>
                    <img style={{marginLeft: "10px"}} src={GoogleLogin}/>
                </div>

               
              


                </div>
            </div>
        )
    }
}


export default LoginForm