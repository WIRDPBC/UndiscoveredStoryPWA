/**
 * Created By Nikita Mittal
 * 20th March 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {hostUrl} from '../helper'
import axios from 'axios'


//import css
import './Profile.css'

//import actions
import {onUpdateLoginAction} from '../../reducers/User/actions'

//import components
import ProfileForm from './ProfileForm'

class Profile extends PureComponent{
    static propTypes = {
        onClose: PropTypes.func,
        isProfileDialogOpened: PropTypes.bool
        
    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }

    onProfileSave = (values) => {
        const {onUpdateLoginAction} = this.props
        console.log("On Profile Save getting called", values)
        if(values.firstName && values.lastName && values.email){
            let url = `${hostUrl}/updateUserData`
            let formData = {
                firstName : values.firstName,
                lastName : values.lastName,
                paypalEmail : values.paypalEmail || "",
                email : values.email
            }
            const config = {
                headers: { 'content-type': 'application/json' },
            }
            onUpdateLoginAction(values)
            setTimeout(() => {
                axios.post(url, formData, config)
                .then(data => {
                    console.log("Profile Updated Successfully", data)
                })
                .catch(error => {
                    console.error("Error in Profile Updating", error)
                })
            })
           
        }
    }

    render(){
        const {trigger, isProfileDialogOpened, onClose, profileObj} = this.props
        // let profileObj = {
        //     firstName: "",
        //     lastName: "",
        //     email: ""
        // }
        return (
            <Modal 
            open={isProfileDialogOpened}
            style={{width:"700px"}}
            >
                <ProfileForm onClose={onClose} onSubmit={this.onProfileSave} initialValues={profileObj}/>

            </Modal>
        )
        
    }
}

const mapStateToProps = (state, props) => {
    let gameData = state.GameReducer
    let login = gameData.login
    let profileObj = login
    return {
       profileObj
    }
}

const mapActionsToProps = {
    onUpdateLoginAction
}

export default connect(mapStateToProps, mapActionsToProps)(Profile)