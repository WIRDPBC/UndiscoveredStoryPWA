/**
 * Created By Nikita Mittal
 * 20th March 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'


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
    }

    onProfileSave = (values) => {
        console.log("On Profile Save getting called", values)
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

}

export default connect(mapStateToProps, mapActionsToProps)(Profile)