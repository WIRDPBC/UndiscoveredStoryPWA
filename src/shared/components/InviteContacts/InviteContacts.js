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


class InviteContacts extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <TopHeaderClose title="Invite Contacts"/>
                <div className="invite-contact-container">
                    <InviteContactsItem />
                    <InviteContactsItem />
                    <InviteContactsItem />
                    <InviteContactsItem />
                    <InviteContactsItem />

                </div>
                <div className="invite-contact-container" style={{marginTop: "50px"}}>
                    <InviteContactsItem />
                    <InviteContactsItem />
                    <InviteContactsItem />
                    <InviteContactsEmpty />
                    <InviteContactsEmpty />

                </div>
            </Fragment>
        )
    }
}

export default InviteContacts