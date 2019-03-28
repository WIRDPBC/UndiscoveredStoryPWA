import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'

//import css
import './Signup.css'

//import actions
import {onUpdateLoginAction} from '../../reducers/User/actions'

//import components..
import AuthContainer from '../AuthContainer'
import SignupForm from './SignupForm'



class Signup extends PureComponent{

    onSignup = (values) => {
        const {onUpdateLoginAction} = this.props
        console.log("On Sign Up Values", values)
        if(values.email && values.password && values.firstName && values.termsandconditions && values.eligiblity){
            let url = 'http://localhost:8083/user/create'
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

            axios.post(url, formData, config)
            .then(res => {
                console.log("Signup in successfully!", res.data.userSignupData)
                if(res && res.data &&  res.data.userSignupData){
                    onUpdateLoginAction(res.data.userSignupData)
                }

            })
            .catch(error => {
                console.error("Error in signup", error)
            })

            
        }
    }
    render(){
        return (
            <Fragment>
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