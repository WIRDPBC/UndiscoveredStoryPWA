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

//import components
import WirdForm from '../ReduxForm/WirdForm'
import InputFieldUI from '../ReduxForm/InputField'
import SubmitButton from '../ReduxForm/SubmitButton'


class ForgotPasswordForm extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        const {handleSubmit, invalid, submitting, pristine} = this.props
        return (
            <div className="login-form-container">
                <div className="login-form-heading-container">Forgot Password</div>
                <div className="login-form-main-container">
                    <WirdForm onSubmit={handleSubmit}>
                        <div>
                            <Field component={InputFieldUI} placeholder="Enter Email" type="email" name="email"/>
                            {/* <Input fluid placeholder="Enter Email" /> */}
                        </div>

                        <div className="login-form-button-container">
 
                                <SubmitButton content="Send Code"  size="medium" style={{ width: "150px", height: "40px" }} primary disabled={invalid || pristine || submitting}/>
                        </div>
                    </WirdForm>
                </div>
            </div>
        )
    }
}

const ForgotPasswordReduxForm = reduxForm({
    form: "forgotPasswordForm"
})(ForgotPasswordForm)


export default ForgotPasswordReduxForm