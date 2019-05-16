/**
 * Created By Nikita Mittal
 * 10th April 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

//import css
import './ForgotPassword.css'

//import components..
import AuthContainer from '../AuthContainer'
import ForgotPasswordForm from './ForgotPasswordForm'
import InfoDialog from '../InfoDialog'
import {hostUrl} from '../helper'


class ForgotPassword extends PureComponent{
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
        this.state = {
            isDialogOpened : false
        }
    }

    onForgotPassword = (values) => {
        if(values.email){
            console.log("Forgot Password getting called")
            let url = `${hostUrl}/sendEmail`
            let formData = {
                to : values.email,
            }

            const config = {
                headers: { 
                    'content-type': 'application/json',
                },
            }

          axios.post(url, formData, config)
          .then(data => {
              this.setState({
                  isDialogOpened : true
              })
              console.log("Forgot Request send successfully", data)
          })
          .catch(error => {
              console.error("Error in sending forget password request", error)
          })
        }
    }

    onClose = () => {
        this.setState({
            isDialogOpened: false
        })
    }

    render(){
        const {isDialogOpened} = this.props
        return (
            <Fragment>
                <AuthContainer>
                    <ForgotPasswordForm onSubmit={this.onForgotPassword}/>
                </AuthContainer>
                <InfoDialog isDialogOpened={isDialogOpened} infoText={"Reset Password Link has been sent to your email address. Please Check your inbox to proceed."} onClose={this.closeDialog} title="Forget Password"/>
            </Fragment>
        )
    }

}


export default ForgotPassword