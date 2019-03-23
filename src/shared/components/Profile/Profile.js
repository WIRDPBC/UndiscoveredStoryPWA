/**
 * Created By Nikita Mittal
 * 20th March 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'semantic-ui-react'


//import css
import './Profile.css'

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
        this.profileObj = {
            firstName: "",
            lastName: "",
            email: ""
        }
    }

    onProfileSave = (values) => {
        console.log("On Profile Save getting called", values)
    }

    render(){
        const {trigger, isProfileDialogOpened, onClose} = this.props
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
                <ProfileForm onClose={onClose} onSubmit={this.onProfileSave} initialValues={this.profileObj}/>

            </Modal>
        )
        
    }
}

export default Profile