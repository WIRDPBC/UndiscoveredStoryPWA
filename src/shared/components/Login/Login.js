/**
 * Created By Nikita Mittal
 * 27th Jan 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'; 
import axios from 'axios'
import {connect} from 'react-redux'

//import css
import './Login.css'

//import actions..
import {onUpdateLoginAction} from '../../reducers/User/actions'

//import components
import AuthContainer from '../AuthContainer'
import LoginForm from './LoginForm'

class Login extends PureComponent{

    onLogin = (values) => {
        const {onUpdateLoginAction} = this.props
        console.log("On login getting called", values)
        if(values.email && values.password){
           // let url = 'http://localhost:8083/user/login'
           let url = 'https://udgt-7790b.firebaseapp.com/user/login'
            let formData = {
                    Email : values.email,
                    Password : values.password
            }

            const config = {
                headers: { 'content-type': 'application/json' },
              }

            axios.post(url, formData, config)
            .then(res => {
                console.log("Logged in successfully!", res.data)
                if(res && res.data){
                    onUpdateLoginAction(res.data)
                }

            })
            .catch(error => {
                console.error("Error in login", error)
            })

            
        }

    }
    render(){
        return (
            <Fragment>
                <AuthContainer>
                    <LoginForm onSubmit={this.onLogin}/>
                </AuthContainer>
            </Fragment>
        )
    }
}

const mapActionToProps = {
    onUpdateLoginAction
}


export default connect(null, mapActionToProps)(Login)