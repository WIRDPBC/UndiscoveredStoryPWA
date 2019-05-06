/**
 * Created By Nikita Mittal
 * 21st Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'


import { Grid } from 'semantic-ui-react'

import FacebookLogin from '../../icons/FacebookLogin.png'
import GoogleLogin from '../../icons/GoogleLogin.png'
import TwitterLogin from '../../icons/TwitterLogin.png'

//import components
import WirdForm from '../ReduxForm/WirdForm'
import InputFieldUI from '../ReduxForm/InputField'
import SubmitButton from '../ReduxForm/SubmitButton'


class LoginForm extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    handleKeyDown = (e, cb) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
          e.preventDefault();
          cb();
        }
      };

    render() {
        const {handleSubmit, invalid, submitting, pristine} = this.props
        return (
            <div className="login-form-container">
                <div className="login-form-heading-container">Undiscovered Story</div>
                <div className="login-form-main-container">
                    <WirdForm onSubmit={handleSubmit} onKeyDown={(e) => { this.handleKeyDown(e, handleSubmit); }}>
                        <div>
                            <Field component={InputFieldUI} placeholder="Enter Email" type="email" name="email"/>
                            {/* <Input fluid placeholder="Enter Email" /> */}
                        </div>
                        <div className="login-form-passowrd-container">
                            <Field component={InputFieldUI} placeholder="Enter Password" type="password" name="password"/>
                            {/* <Input fluid placeholder="Enter Password" type="password" /> */}
                        </div>

                        <div className="login-form-signup-forgot-container">
                            <Link to={'/signup'}>
                                <div className="login-form-create-new-account-container">Create new account</div>
                            </Link>
                            <Link to={'/forgotPassword'}>
                                <div className="login-form-forgot-password-container">Forgot password?</div>
                            </Link>
                        </div>

                        <div className="login-form-button-container">
 
                                <SubmitButton content="Login"  size="medium" style={{ width: "150px", height: "40px" }} primary disabled={invalid || pristine || submitting}/>
                        </div>
                        {/* <div className="login-form-login-with-container">Or login with</div>

                        <div className="login-form-other-login-container">
                            <img src={FacebookLogin} />
                            <img style={{ marginLeft: "10px" }} src={TwitterLogin} />
                            <img style={{ marginLeft: "10px" }} src={GoogleLogin} />
                        </div> */}
                    </WirdForm>
                </div>
            </div>
        )
    }
}

const LoginReduxForm = reduxForm({
    form: "loginForm"
})(LoginForm)


export default LoginReduxForm