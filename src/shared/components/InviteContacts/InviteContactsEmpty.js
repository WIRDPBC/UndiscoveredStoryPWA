/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';

const InviteContactsEmpty = (props) => {
    return (
        <div className="invite-contacts-item-container" style={{paddingLeft: "45px"}}>
            <div className="invite-contact-empty-circle"></div>
            <div className="invite-contact-empty-text"></div>
        </div>      
    )
}

export default InviteContactsEmpty