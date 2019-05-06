/**
 * Created By Nikita MIttal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {connect} from 'react-redux'


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
        const {noOfTokens, tokenWorth, walletAddress} = this.props
        return (
            <div className="wallet-card-container">
                <div className="wallet-card-data-container">
                    <div style={{height:"72px"}}>
                    <img src={WalletIcon} style={{float: "left"}}/>
                    <div className="wallet-card-amount-data-container">
                        <div className="wallet-card-total-amount-text-container">Total Wallet</div>
                        <div className="wallet-card-total-worth-data-container">${tokenWorth}</div>
                        <div className="wallet-card-total-token-container">{noOfTokens}</div>
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
                            <div className="wallet-card-address">{walletAddress}</div>
                        </div>
                        <CopyToClipboard text={{walletAddress}}>
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

const mapStateToProps = (state, ownProps) => {
    const gameData = state.GameReducer
    const login = gameData.login
    let walletAddress
    if(login && login.walletData && login.walletData.publicKey){
        walletAddress = login.walletData.publicKey
    } else{
        walletAddress = "publicKey"
    }

    return {
      noOfTokens : 88,
      tokenWorth : 88*0.15,
      walletAddress
    }
}

const mapActionToProps = {

}

export default connect(mapStateToProps, mapActionToProps)(WalletCard)