/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

 import React, { PureComponent, Fragment } from 'react'
 import PropTypes from 'prop-types'
 import {Checkbox, Icon} from 'semantic-ui-react'
 import { withRouter } from "react-router-dom";
 import {connect} from 'react-redux'

 //import css
import './Settings.css'

//import components..
import TopHeader from '../TopHeader'
import Navigator from '../Navigator'
import NavUser from '../../icons/NavUser';
import Profile from '../Profile';

class Settings extends PureComponent{
    static propTypes = {

    }

    constructor(props){
        super(props)
        this.state = {
            visible: false,
            isAdvertisingActive : false,
            isProfileDialogOpened : false
        }
    }

    onOpenSidebar = () => {
        this.setState({
            visible : true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
    }

    onChangeAdvertising = () => {
        const {isAdvertisingActive} = this.state
        this.setState({
            isAdvertisingActive : !isAdvertisingActive
        })
        if(!isAdvertisingActive){
            this.props.history.push('/advertising-opt')
        }
    }

    onOpenProfileDialog = () => {
        this.setState({
            isProfileDialogOpened : true
        })
    }

    onCloseProfileDialog = () => {
        this.setState({
            isProfileDialogOpened : false
        })
    }

    getName = () => {
        const {firstName, lastName} = this.props
        let name = `${firstName} ${lastName}`
        return name
    }


    render(){
        const {visible, isAdvertisingActive, isProfileDialogOpened} = this.state
        const {firstName, lastName, email} = this.props
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Settings"/>
                    <div className="settings-container">
                        <div className="settings-user-data-container">
                            <NavUser fill="#ffffff" style={{height: "60px", width: "60px"}} className="settings-user-container"/>
                            <div className="settings-user-profile-container">
                                <div>{this.getName()}</div>
                                <div>{email}</div>
                                {/* <div>(Level)</div> */}
                            </div>
                            <Icon name="edit" size="large" onClick={this.onOpenProfileDialog} style={{marginRight: "20px", color: "#fff", fontSize: "16px", cursor: "pointer"}}/>
                            {/* <Popup
                            trigger={ <Icon name="edit" size="large" style={{marginRight: "20px", color: "#fff", fontSize: "16px", cursor: "pointer"}}/>}
                            on="click"
                            open={isProfileDialogOpened}
                            onOpen = {this.onOpenProfileDialog}
                            onCLose={this.onCloseProfileDialog}
                            >
                               
                            </Popup> */}
                           
                        </div>
                        <div className="settings-advertising-container">
                            <div className="settings-advertising-text-container">Advertising OPT-IN</div>
                            <div>
                                <Checkbox toggle onChange={this.onChangeAdvertising} checked={isAdvertisingActive}></Checkbox>
                            </div>
                            
                        </div>
                    </div>
                    <Profile onClose={this.onCloseProfileDialog} isProfileDialogOpened={isProfileDialogOpened}/>
                </Fragment>
            </Navigator>
        )
    }
}

const mapStateToProps = (state, props) => {
    let gameData = state.GameReducer
    let login = gameData.login
    let firstName = "", lastName = "", email = ""

    if(login){
        firstName = login.firstName
        lastName = login.lastName
        email = login.email
       
    }
    return {
        firstName,
        lastName,
        email
       
    }
}

const mapActionsToProps = {

}


export default withRouter(connect(mapStateToProps, mapActionsToProps)(Settings))