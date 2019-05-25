/**
 * Created By Nikita Mittal
 * 27th Jan 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'
import { connect } from 'react-redux'
import { hostUrl } from '../helper'
import { Loader, Dimmer } from 'semantic-ui-react'

//import css
import './Login.css'

//import actions..
import { onUpdateLoginAction } from '../../reducers/User/actions'

//import images
import LoginImage from '../../icons/login-image.png'

//import components
import AuthContainer from '../AuthContainer'
import LoginForm from './LoginForm'
import ErrorDialog from '../ErrorDialog'

class Login extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            isLoading : false,
            isDialogOpened : false,
            errorText: ''
        }
    }

    onLogin = (values) => {
        const { onUpdateLoginAction } = this.props
        console.log("On login getting called", values)
        if (values.email && values.password) {
            let url = `${hostUrl}/login`
            let formData = {
                Email: values.email,
                Password: values.password,
                crossDomain: true
            }

            const config = {
                headers: {
                    'content-type': 'application/json',
                },
                //  withCredentials: true
            }
            this.changeLoadingState()

            axios.post(url, formData, config)
                .then(res => {
                    console.log("Logged in successfully!", JSON.stringify(res.data))
                    if (res && res.data) {
                        if(res.data.authenticationToken){
                            this.changeLoadingState()
                            let authenticationToken = res.data.authenticationToken
                            localStorage.setItem("access_token", authenticationToken)
    
                            onUpdateLoginAction(res.data)
                        } else if(res.data.Message){
                            this.changeLoadingState()
                            this.setErrorText(res.data.Message)
                        }
                       
                    }

                })
                .catch(error => {
                    this.changeLoadingState()
                    console.error("Error in login", error)
                    this.setErrorText("Invalid")

                })


        }

    }

    setErrorText = (message) => {
        this.setState({
            isDialogOpened: true,
            errorText: message
        })
    }

    changeLoadingState = () => {
        const {isLoading} = this.state
        this.setState({
            isLoading : !isLoading
        })
    }

    onClose = () => {
        this.setState({
            isDialogOpened: false
        })
    }
    render() {
        const {isLoading, isDialogOpened, errorText} = this.state
        return (
            <Fragment>
                <Dimmer active = {isLoading} inverted>
                    <Loader size='large' active={isLoading}>Loading</Loader>
                </Dimmer>
                <AuthContainer placeholderImage={LoginImage}>
                    <LoginForm onSubmit={this.onLogin} />
                    <ErrorDialog isDialogOpened={isDialogOpened} onClose={this.onClose} errorText={errorText}/>
                </AuthContainer>
            </Fragment>
        )
    }
}

const mapActionToProps = {
    onUpdateLoginAction
}


export default connect(null, mapActionToProps)(Login)