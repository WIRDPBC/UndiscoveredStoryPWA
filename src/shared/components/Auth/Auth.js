/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { hostUrl } from '../helper'

//import actions
import { onUpdateLoginAction, isAccessTokenValidAction } from '../../reducers/User/actions'



class Auth extends PureComponent {
    constructor(props) {
        super(props)
        this.roles = '$authenticated'
    }
    componentWillMount() {
        const { onUpdateLoginAction, isAccessTokenValidAction, isAccessTokenValid } = this.props
        let retrievedAccessToken = localStorage.getItem('access_token')
        //TODO: to be fixed...
        if (isAccessTokenValid === null || isAccessTokenValid === undefined) {
            //call api..
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
            }
            let url = `${hostUrl}/authenticate`
            let formData = {
                authenticationToken: retrievedAccessToken
            }
            axios.post(url, formData, config)
                .then((data) => {
                    if (data.data) {
                        onUpdateLoginAction(data.data)
                    }
                })
                .catch(error => {
                    console.error("Auth Error", error)
                    this.roles = '$unauthenticated'
                    isAccessTokenValidAction(false)
                })

        }



    }
    render() {
        const { loginUserEmail, accept, reject, redirectTo, isAccessTokenValid } = this.props
        let retrievedAccessToken = localStorage.getItem('access_token')
        if(isAccessTokenValid){
            this.roles = '$authenticated'
        } else if(retrievedAccessToken) {
            this.roles = '$authenticated'

        } else {
            this.roles = '$unauthenticated'
        }
        if (this.roles === accept) {
            return (
                <Fragment>
                    {this.props.children}
                </Fragment>
            )

        } else {
            return (
                <Redirect to={redirectTo} />
            )
        }

    }
}

const mapStateToProps = (state, props) => {
    let login = state.GameReducer.login
    let isAccessTokenValid = state.GameReducer.isAccessTokenValid
    let email
    if (login && login.email) {
        email = login.email
    }
    return {
        loginUserEmail: email,
        isAccessTokenValid
    }
}

const mapActionToProps = {
    onUpdateLoginAction,
    isAccessTokenValidAction
}


export default connect(mapStateToProps, mapActionToProps)(Auth)