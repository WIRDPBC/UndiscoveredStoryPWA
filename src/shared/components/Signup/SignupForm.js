/**
 * Created By Nikita Mittal
 * 22nd Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'


//import components..
import WirdForm from '../ReduxForm/WirdForm'


class SignupForm extends PureComponent {
    static propTypes = {

    }

    static propTypes = {

    }

    constructor(props) {
        super(props)

        //Event Handlers
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSignupClicked = this.onSignupClicked.bind(this);
        this.onCheckedEligibility = this.onCheckedEligibility.bind(this);
        this.onCheckedTermsConditions = this.onCheckedTermsConditions.bind(this);

        // Set your state here
        this.state = {
            email: '',
            password: '',
            ischeckedTermsConditions: false,
            ischeckedEligibility: false
        }
    }

    //Email Textbox Handler
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    //Password Textbox Handler
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    //Terms and Conditions Checkbox Handler
    onCheckedTermsConditions() {
        this.setState({
            ischeckedTermsConditions: !this.state.ischeckedTermsConditions
        });
    }

    //Eligibility Checkbox Handler
    onCheckedEligibility() {
        this.setState({
            ischeckedEligibility: !this.state.ischeckedEligibility
        });
    }

    onSignupClicked(e) {
        e.preventDefault();
        console.log(`name is ${this.state.email} and port is ${this.state.password} and TermsConditions is ${this.state.ischeckedTermsConditions} & Eligibility is ${this.state.ischeckedEligibility}`);

        if (this.state.email === '') {
            //Show Popup or Error Message Here
            return;
        }

        if (this.state.password === '') {
            //Show Popup or Error Message Here
            return;
        }
        if (!this.state.ischeckedTermsConditions) {
            //Show Popup or Error Message Here
            return;
        }
        if (!this.state.ischeckedEligibility) {
            //Show Popup or Error Message Here
            return;
        }


        //Reset your state here
        this.state = {
            email: '',
            password: '',
            ischeckedTermsConditions: false,
            ischeckedEligibility: false
        }
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <WirdForm onSubmit={handleSubmit}>
                <div className="signup-form-container">
                    <div className="signup-form-heading-container">Sign Up</div>
                    <div className="signup-form-main-container">
                        <div>
                            <Input fluid placeholder="Enter Email" onChange={this.onChangeEmail} />
                        </div>
                        <div className="signup-form-passowrd-container">
                            <Input fluid type="password" placeholder="Enter Password" onChange={this.onChangePassword} />
                        </div>
                        <div className="signup-form-first-condition-container">
                            <Checkbox style={{ float: "left" }} onChange={this.onCheckedTermsConditions} />
                            <span className="signup-form-condition-text-container">I agree to the Terms & services and Privacy Policy of <br />undiscovered story</span>
                        </div>
                        <div className="signup-form-second-condition-container">
                            <Checkbox style={{ float: "left" }} onChange={this.onCheckedEligibility} />
                            <span className="signup-form-condition-text-container">I have read the above eligibility guidelines and certify <br />
                                that I am at least 16 years old and I am not a citizen of <br />
                                a restricted or banned country.
                            </span>
                        </div>

                        <div className="signup-form-button-container">

                            <Button size="medium" style={{ width: "200px", height: "40px" }} primary
                                onClick={this.onSignupClicked}
                            >Sign Up</Button>

                            <Link to={'/home'}>
                                <Button size="medium" style={{ width: "200px", height: "40px" }} primary
                                    onClick={this.onSignupClicked}
                                >Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </WirdForm>
            
        )
    }
}

const validate = values => {
    const errors = {}
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