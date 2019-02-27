/**
 * Created By Nikita Mittal
 * 27th FEb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'


const DonationElement = (props) => {
    const {title, amount, tokens} = props
    return (
        <div className="donate-element-container">
           <div className="donate-element-header-container">{title}</div>
           <div className="donate-element-amount-token-container">
               <div className="donate-element-amount-text-container">{amount}</div>
               <div>
                   <span>{tokens}</span>
                   <span className="donate-element-tokens-text-container"> tokens</span>
               </div>
            </div> 
        </div>
    )
}

export default DonationElement