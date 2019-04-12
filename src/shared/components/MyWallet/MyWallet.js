/**
 * Created By nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';

//import css
import './MyWallet.css'

//import components
import Navigator from '../Navigator'
import TopHeader from '../TopHeader'
import WalletCard from './WalletCard';
import TransactionItem from './TransactionItem';



class MyWallet extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }


    onOpenSidebar = () => {
        this.setState({
            visible : true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
    }


    render() {
        const { visible } = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="My Wallet" />
                    <div className="my-wallet-container">
                        <div className="my-wallet-card-container">
                            <WalletCard />
                        </div>
                        {/* <div className="my-wallet-transactions-container">
                            <div className="my-wallet-recent-transactions-text">Recent Transactions</div>
                            <div className="my-wallet-recent-transaction-list-container">
                                <TransactionItem status="Sent" group="Vetted Girls" container="odd"/>
                                <TransactionItem status="Receive" group="Q23hh04john27elite" container="even"/>
                                <TransactionItem status="Purchased" group="Q23hh04john27elite" container="odd"/>
                                <TransactionItem status="Sent" group="P18ak65marry29chelsea" container="even"/>
                                <TransactionItem status="Purchased" group="Q23hh04john27elite" container="odd"/>
                            </div>
                        </div> */}
                    </div>
                </Fragment>
            </Navigator>
        )
    }
}

export default MyWallet