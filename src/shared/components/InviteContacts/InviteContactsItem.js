/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'



const InviteContactsItem = (props) => {
    const {onClick, name, image} = props
    return (
        <div className="invite-contacts-item-container" onClick={onClick}>
            <img src={image} alt="whatsapp-icon"/>
            <div className="invite-contacts-item-text">{name}</div>
        </div>
    )
}

export default InviteContactsItem