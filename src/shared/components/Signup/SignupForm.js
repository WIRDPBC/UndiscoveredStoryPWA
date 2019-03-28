/**
 * Created By Nikita Mittal
 * 22nd Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Checkbox, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'


//import components..
import WirdForm from '../ReduxForm/WirdForm'
import InputFieldUI from '../ReduxForm/InputField'

import CheckboxField from '../ReduxForm/Checkbox';
import SubmitButton from '../ReduxForm/SubmitButton';


class SignupForm extends PureComponent {
    static propTypes = {

    }

    static propTypes = {

    }

    constructor(props) {
        super(props)
    }


    render() {
        const {handleSubmit, pristine, submitting, invalid} = this.props
        return (
            <WirdForm onSubmit={handleSubmit}>
                <div className="signup-form-container">
                    <div className="signup-form-heading-container">Sign Up</div>
                    <div className="signup-form-main-container">
                    <Grid columns="equal" style={{padding:0}}>
                        <Grid.Column style={{padding:0, marginRight:"10px"}}>
                            <Field component={InputFieldUI} placeholder="First Name" type="text" name="firstName"/>
                        </Grid.Column>
                        <Grid.Column style={{padding: 0, marginLeft:"10px"}}>
                            <Field component={InputFieldUI} placeholder="Last Name" type="text" name="lastName" required={false}/>
                        </Grid.Column>
                    </Grid>
                    {/* <div style={{display: "flex"}}>
                           
                            
                        </div> */}
                        <div className="signup-form-passowrd-container">
                            <Field component={InputFieldUI} type="email" name="email"  placeholder="Enter Email"/>
                            {/* <Input fluid placeholder="Enter Email" onChange={this.onChangeEmail} /> */}
                        </div>
                        <div className="signup-form-passowrd-container">
                            <Field component={InputFieldUI} type="password" name="password" placeholder="Enter Password"/>
                            {/* <Input fluid type="password" placeholder="Enter Password" onChange={this.onChangePassword} /> */}
                        </div>
                        <div className="signup-form-first-condition-container">
                            <Field value={false} component="input" id="termsandconditions" type="checkbox" name="termsandconditions" style={{float:"left"}}/>
                            {/* <Checkbox style={{ float: "left" }} onChange={this.onCheckedTermsConditions} /> */}
                            <span className="signup-form-condition-text-container">I agree to the Terms & services and Privacy Policy of <br />undiscovered story</span>
                        </div>
                        <div className="signup-form-second-condition-container">
                            <Field value={false} component="input" id="eligiblity" type="checkbox" name="eligiblity" style={{float:"left"}}/>
                            {/* <Checkbox style={{ float: "left" }} onChange={this.onCheckedEligibility} /> */}
                            <span className="signup-form-condition-text-container">I have read the above eligibility guidelines and certify <br />
                                that I am at least 16 years old and I am not a citizen of <br />
                                a restricted or banned country.
                            </span>
                        </div>

                        <div className="signup-form-button-container">
                            <SubmitButton type="submit" size="medium" content="Sign Up" style={{ width: "200px", height: "40px" }} primary disabled={invalid || pristine || submitting}/>

                        </div>
                    </div>
                </div>
            </WirdForm>
            
        )
    }
}

const validate = values => {
    const errors = {}
    if(!values.firstName){
        errors.firstName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if(!values.termsandconditions){
        errors.termsandconditions = 'Required'
    }
    if(!values.eligiblity){
        errors.eligiblity = 'Required'
    }
    return errors
} 

const SignupFormRedux = reduxForm({
    form: 'signupForm',
    enableReinitialize: true,
    validate
})(SignupForm)


export default SignupFormRedux;