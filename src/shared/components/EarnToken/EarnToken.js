/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';

//import css
import './EarnToken.css'

//import componnets
import Navigator from '../Navigator'
import TopHeader from '../TopHeader'

import InviteUserIcon from '../../icons/InviteUserIcon.png'
import AdvertisingIcon from '../../icons/AdvertisingIcon.png'


class EarnToken extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    onOpenSidebar = () => {
        this.setState({
            visible: true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const {visible} = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Earn Tokens" />
                    <div className="earn-token-container">
                    <div className="earn-token-card-container">
                        <img style={{width: "87.3px", height: "87.3px", position:"relative", top:"33px"}} src={InviteUserIcon} alt="Invite User Icon" />
                        <div className="earn-token-card-title-container">Invite Friends</div>
                        <div className="earn-token-card-description-container">Get 3 UDSG tokens for every friend who signs up and plays the game</div>
                    </div>
                    <div className="earn-token-card-container">
                        <img style={{width: "87.3px", height: "87.3px", position:"relative", top:"33px"}} src={AdvertisingIcon} alt="Advertising Icon" />
                        <div className="earn-token-card-title-container">Advertising OPT</div>
                        <div className="earn-token-card-description-container">Get 3 UDSG tokens for every friend who signs up and plays the game</div>
                    </div>

                    </div>
                </Fragment>
            </Navigator>
        )
    }
}

export default EarnToken