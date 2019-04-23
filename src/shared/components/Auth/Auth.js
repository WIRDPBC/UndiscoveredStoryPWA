/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {hostUrl} from '../helper'



class Auth extends PureComponent{
    constructor(props){
        super(props)
        this.roles = '$unauthenticated'
    }
    componentWillMount(){
        let retrievedAccessToken = localStorage.getItem('access_token')
        console.log("Retrive Item", retrievedAccessToken)
        if(retrievedAccessToken){
            this.roles = '$authenticated'
        }
        //TODO: to be fixed...
        //call api..
        // const config = {
        //     headers: { 
        //         'content-type': 'application/json',
        //      },
        //   }
        // let url = `${hostUrl}/authenticate`
        // let formData = {}
        // axios.post(url, formData, config)
        // .then((data) => {
        //     console.log("Auth Data", data)
        // })
        // .catch(error => {
        //     console.error("Auth Error", error)
        // })

        

    }
    render(){
        const {loginUserEmail, accept, reject, redirectTo} = this.props
        let retrievedAccessToken = localStorage.getItem('access_token')
        if(retrievedAccessToken){
            this.roles = '$authenticated'
        }
       // console.log("Auth Data role", this.roles)
       // console.log("Auth aceept", accept, )
        if(this.roles === accept){
            return (
                <Fragment>
                    {this.props.children}
                </Fragment>
            )
         
        } else{
            return (
                <Redirect to={redirectTo} />
            )
        }
        
    }
}

const mapStateToProps = (state, props) => {
    let login = state.GameReducer.login
    let email
    if(login && login.email){
        email = login.email
    }
    return {
       loginUserEmail : email
    }
}


export default connect(mapStateToProps, null)(Auth)