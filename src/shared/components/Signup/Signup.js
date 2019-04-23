import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'
import { Loader, Dimmer } from 'semantic-ui-react'

//import css
import './Signup.css'

//import actions
import {onUpdateLoginAction} from '../../reducers/User/actions'

//import components..
import AuthContainer from '../AuthContainer'
import SignupForm from './SignupForm'
import { hostUrl } from '../helper'


class Signup extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            isLoading : false
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
                console.log("Signup in successfully!", res.data.userSignupData)
                if(res && res.data &&  res.data.userSignupData){
                    this.changeLoadingState()
                    let authenticationToken = res.data.userSignupData.authenticationToken
                    localStorage.setItem("access_token", authenticationToken)
                    onUpdateLoginAction(res.data.userSignupData)
                }

            })
            .catch(error => {
                this.changeLoadingState()
                console.error("Error in signup", error)
            })

            
        }
    }

    changeLoadingState = () => {
        const {isLoading} = this.state
        this.setState({
            isLoading : !isLoading
        })
    }
    render(){
        const {isLoading} = this.state
        return (
            <Fragment>
                 <Dimmer active = {isLoading} inverted>
                    <Loader size='large' active={isLoading}>Loading</Loader>
                </Dimmer>
                <AuthContainer>
                    <SignupForm onSubmit={this.onSignup}/>
                </AuthContainer>
            </Fragment>
            
        )
    }
}

const mapActionsToProps = {
    onUpdateLoginAction
}


export default connect(null, mapActionsToProps)(Signup)