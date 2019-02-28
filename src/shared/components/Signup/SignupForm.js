/**
 * Created By Nikita Mittal
 * 22nd Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Checkbox } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SignupForm extends PureComponent {
    static propTypes = {

    }

    static propTypes = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="signup-form-container">
                <div className="signup-form-heading-container">Sign Up</div>
                <div className="signup-form-main-container">
                    <div>
                        <Input fluid placeholder="Enter Email"/>
                    </div>
                    <div className="signup-form-passowrd-container">
                        <Input fluid type="password" placeholder="Enter Password"/>
                    </div>
                    <div className="signup-form-first-condition-container">
                        <Checkbox style={{float: "left"}}/>
                        <span className="signup-form-condition-text-container">I agree to the Terms & services and Privacy Policy of <br/>undiscovered story</span>
                    </div>
                    <div className="signup-form-second-condition-container">
                        <Checkbox  style={{float: "left"}}/>
                        <span className="signup-form-condition-text-container">I have read the above eligibility guidelines and certify <br/>
                        that I am at least 16 years old and I am not a citizen of <br/>
                        a restricted or banned country.    
                        </span>
                    </div>

                    <div className="signup-form-button-container">
                    <Link to={'/home'}>
                        <Button size="medium" style={{ width: "200px", height: "40px" }} primary>Sign Up</Button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignupForm;