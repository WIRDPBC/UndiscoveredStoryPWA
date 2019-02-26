/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';

const TransactionItem = (props) => {
    const {status, group, container} = props
    let className = `transaction-item-container ${container}`

    return(
        <div className={className}>
            <div className="transaction-item-text-container transaction-item-text-flex-container">
                <div>{status}</div>
                <div>05 January 2019</div>
            </div>
            <div className="transaction-item-text-container transaction-item-text-flex-container">
                <div className="transaction-item-data-text-container">{group}</div>
                <div className="transaction-item-data-text-container">05 January 2019</div>
            </div>
            <div className="transaction-item-text-container">
                <div className="transaction-item-amount-text-container">$1.50</div>
                <div>10 tokens</div>
            </div>
        </div>
    )
}

export default TransactionItem