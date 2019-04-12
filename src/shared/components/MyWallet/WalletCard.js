/**
 * Created By Nikita MIttal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'


//import images 
import WalletIcon from '../../icons/WalletIcon.png'

//import css

class WalletCard extends PureComponent{
    static propTypes = {

    }

    static defaultProps= {

    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="wallet-card-container">
                <div className="wallet-card-data-container">
                    <div style={{height:"72px"}}>
                    <img src={WalletIcon} style={{float: "left"}}/>
                    <div className="wallet-card-amount-data-container">
                        <div className="wallet-card-total-amount-text-container">Total Wallet</div>
                        <div className="wallet-card-total-worth-data-container">$1000</div>
                        <div className="wallet-card-total-token-container">6666.67</div>
                    </div>
                    </div>
                    
                    <div style={{marginTop:"17px", paddingRight: "25px"}}>
                        <Button content="PURCHASE" basic primary disabled style={{width:"123px"}}/>
                        <Button content="WITHDRAW" basic primary disabled style={{width:"123px", marginLeft:"29px"}}/>
                        <Button content="SEND" basic primary disabled style={{width:"123px", float:"right"}}/>
                    </div>
                </div>

                <div className="wallet-card-address-container">
                    <div className="wallet-card-qrcode-container">
                        <Icon name="qrcode" style={{color: "#fff"}}/>
                    </div>
                    <div className="wallet-card-address-data-container">
                        <div className="wallet-card-content-container">
                            <div style={{fontSize:"12px", fontWeight:"bold"}}>Wallet Address</div>
                            <div className="wallet-card-address">GAYXX5B3HP6SDPSI4532JIZ7FHULBTIXP5OBU55MDVORBF7XT2H2PCWZ</div>
                        </div>
                        <CopyToClipboard text="GAYXX5B3HP6SDPSI4532JIZ7FHULBTIXP5OBU55MDVORBF7XT2H2PCWZ">
                            <div className="wallet-card-copy-text-container">Copy</div>
                        </CopyToClipboard>
                    </div>
                </div>
            {/* <Link to={'/purchase-tokens'}>
                <Button content="Purchase" basic primary style={{position:"relative", top: "42%"}}/>
            </Link> */}
            

            </div>
        )
    }
}

export default WalletCard