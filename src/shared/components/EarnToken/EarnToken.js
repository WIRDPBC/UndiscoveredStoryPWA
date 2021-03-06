/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

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
        const { visible } = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Earn Tokens" />
                    <div className="earn-token-container">
                        <Link to="/invite-friends">
                            <div className="earn-token-card-container">
                                <img style={{ width: "87.3px", height: "87.3px" }} src={InviteUserIcon} alt="Invite User Icon" className="earn-token-image-container" />
                                <div className="earn-token-card-title-container">
                                    Invite Friends
                                    {/* <div>Invite Friends</div> */}
                                </div>
                                <div className="earn-token-card-description-container">Earn 3 UDGT tokens for each friend who signs up and plays the game.</div>
                            </div>
                        </Link>
                       <Link to="/advertising-opt">
                            <div className="earn-token-card-container">
                                <img style={{ width: "87.3px", height: "87.3px" }} src={AdvertisingIcon} alt="Advertising Icon" className="earn-token-image-container" />
                                <div className="earn-token-card-title-container">
                                    <div>Advertising OPT-IN</div>
                                </div>
                                <div className="earn-token-card-description-container">Earn 3 UDGT tokens for every partner ad you view / watch and offer a constructive comment on.</div>
                            </div>
                       </Link>
                        

                    </div>
                </Fragment>
            </Navigator>
        )
    }
}

export default EarnToken