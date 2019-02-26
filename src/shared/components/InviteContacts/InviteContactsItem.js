/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'

//import components
import WhatsappIcon from '../../icons/WhatsappIcon.png'


const InviteContactsItem = (props) => {
    return (
        <div className="invite-contacts-item-container">
            <img src={WhatsappIcon} alt="whatsapp-icon"/>
            <div className="invite-contacts-item-text">Whatsapp</div>
        </div>
    )
}

export default InviteContactsItem