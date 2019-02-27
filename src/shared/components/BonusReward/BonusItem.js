/**
 * Created By Nikita Mittal
 * 27th feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'
import NavUser from '../../icons/NavUser';


const BonusItem = (props) => {
    const {title, tokens} = props
    return(
        <div className="bonus-item-container">
            <div className="bonus-item-header-text-container">{title}</div>
            <div className="bonus-item-tokens-amount-container">
                <span>{tokens}</span>
                <span className="bonus-item-tokens-text-container">UDGT</span>
            </div>
            <div className="bonus-item-user-icon-container">
                <NavUser size="super-massive"/>
                <NavUser className="bonus-item-user-icon" size="super-massive"/>
                <NavUser className="bonus-item-user-icon" size="super-massive"/>
                <NavUser className="bonus-item-user-icon" size="super-massive"/>
                <NavUser className="bonus-item-user-icon" size="super-massive"/>
            </div>
        </div>
    )

}

export default BonusItem