/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, {Fragment, PureComponent} from 'react'
import PropTypes from 'prop-types';

//import css
import './InviteContacts.css'

//import components
import TopHeaderClose from '../TopHeaderClose'
import InviteContactsItem from './InviteContactsItem'
import InviteContactsEmpty from './InviteContactsEmpty';
import SuccessDialog from '../SucessDialog';


class InviteContacts extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            isDialogOpened: false
        }
    }

    onOpenDialog = () => {
        this.setState({
            isDialogOpened : true
        })
    }

    onCloseDialog = () => {
        this.setState({
            isDialogOpened: false
        })
    }

    render(){
        const {isDialogOpened} = this.state
        
        return (
            <Fragment>
                <TopHeaderClose title="Invite Contacts"/>
                <div className="invite-contact-container">
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsItem onClick={this.onOpenDialog}/>

                </div>
                <div className="invite-contact-container" style={{marginTop: "50px"}}>
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsItem onClick={this.onOpenDialog}/>
                    <InviteContactsEmpty />
                    <InviteContactsEmpty />

                </div>
                <SuccessDialog isDialogOpened={isDialogOpened} onClose={this.onCloseDialog}/>
            </Fragment>
        )
    }
}

export default InviteContacts