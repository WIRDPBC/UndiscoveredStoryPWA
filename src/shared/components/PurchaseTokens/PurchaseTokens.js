/**
 * Created By Nikita Mittal
 * 27th FEb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'

//import css
import './PurchaseTokens.css'

//import components
import TopHeaderBack from '../TopHeaderBack'
import AddIcon from '../../icons/AddIcon.png'
import CreditCard from '../CreditCard/CreditCard';


class PurchaseTokens extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="purchase-tokens-container">
                <TopHeaderBack title="Purchase Tokens"/>
                <div className="purchase-tokens-header-text">
                    <div className="purcahse-tokens-select-payment-text">Select Payment Method</div>
                    <img src={AddIcon} alt="Add"className="purchase-tokens-add-container"/>
                   
                </div>
                <div className="purchase-tokens-card-container">
                        <CreditCard />
                </div>
                <div className="purchase-tokens-data-container">
                    <div className="purchase-earn-token-text">Enter Tokens</div>
                    <div className="purchase-tokens-text">1 token = $0.15 cost </div>
                    <div className="purchase-tokens-text">Enter the quantity of tokens you want to purchase:</div>
                    <div className="purchase-tokens-quantity-container">
                        <div className="purchase-tokens-quantity">20 tokens</div>
                        <div className="purchase-tokens-text">$3.00</div>
                    </div>
                    <div className="purchase-tokens-text">$0.05 of every purchase donated to Girls & Women led initiatives.</div>
                </div>
                <div className="purchase-tokens-button-container">
                    <Button content="Purchase" primary style={{height: "40px", width: "171.6px"}}/>
                </div>
            </div>
        )
    }
}

export default PurchaseTokens