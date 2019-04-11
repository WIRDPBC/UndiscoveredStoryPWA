/**
 * Created By Nikita Mittal
 * 10th April 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

//import css
import './ResetPassword.css'

//import components..
import AuthContainer from '../AuthContainer'
import ResetPasswordForm from './ResetPasswordForm'
import {hostUrl} from '../helper'
//import ForgotPasswordForm from './ForgotPasswordForm'


class ResetPassword extends PureComponent{
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }

    onResetPassowrd = (values) => {
        if(values.newpassword === values.confirmpassword){
            const {location} = this.props
            const {search} = location
            let data = search
            let dataArray = data.split("&")
            let email = dataArray[0].replace(/.+=/g, "")
            let id = dataArray[1].replace(/.+=/g,'')
            let password = values.newpassword
            let formData = {
                id : id,
                password: password,
                email: email
            }

            const config = {
                headers: { 
                    'content-type': 'application/json',
                },
            }
            let url = `${hostUrl}/updatePassword`
            axios.post(url, formData, config)
            .then(data => {
                console.log("Reset Password has been set successfully", data)
            })

            .catch(error => {
                console.error("Error is setting password")
            })

        }
     
       
    }

    render(){   
        console.log("Router Props", this.props)

        return (
            <Fragment>
                <AuthContainer>
                    <ResetPasswordForm onSubmit={this.onResetPassowrd}/>
                </AuthContainer>
            </Fragment>
        )
    }

}


export default withRouter(ResetPassword)