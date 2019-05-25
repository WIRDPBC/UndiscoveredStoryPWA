import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'
import { Loader, Dimmer } from 'semantic-ui-react'

//import css
import './Signup.css'

//import actions
import {onUpdateLoginAction} from '../../reducers/User/actions'

//import image
import SignupImage from '../../icons/signup-image.png'

//import components..
import AuthContainer from '../AuthContainer'
import SignupForm from './SignupForm'
import { hostUrl } from '../helper'
import ErrorDialog from '../ErrorDialog'


class Signup extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            isLoading : false,
            isDialogOpened : false,
            errorText: ''
        }
    }

    onSignup = (values) => {
        const {onUpdateLoginAction} = this.props
        console.log("On Sign Up Values", values)
        if(values.email && values.password && values.firstName && values.termsandconditions && values.eligiblity){
            let url = `${hostUrl}/create`
            let formData = {
                    Email : values.email,
                    Password : values.password,
                    firstName: values.firstName,
                    lastName: values.lastName ? values.lastName : '',
                    eligiblityCertified: values.eligiblity,
                    termsPolicy: values.termsandconditions
            }

            const config = {
                headers: { 'content-type': 'application/json' },
              }

              this.changeLoadingState()

            axios.post(url, formData, config)
            .then(res => {
                console.log("Signup in successfully!", res)
                if(res && res.data){
                    if(res.data.userSignupData){
                        this.changeLoadingState()
                        let authenticationToken = res.data.userSignupData.authenticationToken
                        localStorage.setItem("access_token", authenticationToken)
                        onUpdateLoginAction(res.data.userSignupData)
                    } else if(res.data.Message){
                        this.changeLoadingState()
                        this.setErrorText(res.data.Message)
                    }
                  
                }

            })
            .catch(error => {
                this.changeLoadingState()
                console.error("Error in signup", error)
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
    render(){
        const {isLoading, isDialogOpened, errorText} = this.state
        return (
            <Fragment>
                 <Dimmer active = {isLoading} inverted>
                    <Loader size='large' active={isLoading}>Loading</Loader>
                </Dimmer>
                <AuthContainer placeholderImage={SignupImage}>
                    <SignupForm onSubmit={this.onSignup}/>
                    <ErrorDialog isDialogOpened={isDialogOpened} onClose={this.onClose} errorText={errorText}/>
                </AuthContainer>
            </Fragment>
            
        )
    }
}

const mapActionsToProps = {
    onUpdateLoginAction
}


export default connect(null, mapActionsToProps)(Signup)