/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Auth extends PureComponent{
    constructor(props){
        super(props)
        this.roles = '$unauthenticated'
    }
    render(){
        const {loginUserEmail, accept, reject, redirectTo} = this.props
        if(loginUserEmail){
            this.roles = '$authenticated'
        }
        console.log("Auth Data role", this.roles)
        console.log("Auth aceept", accept, )
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