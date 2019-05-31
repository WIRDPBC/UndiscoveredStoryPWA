/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


//import css
import './Navigation.css'

//import components..
import NavUser from '../../icons/NavUser';

//import actions
import {onLogout} from '../../reducers/User/actions'

//import images
import NavImage from '../../icons/NavImage.png'
import AvatarProfile from '../../icons/AvatarProfile.png'

import HomeNavIcon from '../../icons/HomeNavIcon.png'
import MiniBytesNavIcon from '../../icons/MiniByteNavIcon.png'
import DonateNavIcon from '../../icons/DonateNavIcon.png'
import LeaderNavIcon from '../../icons/LeaderNavIcon.png'
import EarnNavIcon from '../../icons/EarnNavIcon.png'
import WalletNavIcon from '../../icons/WalletNavIcon.png'
import BonusNavIcon from '../../icons/BonusNavIcon.png'
import SettingsNavIcon from '../../icons/SettingsNavIcon.png'

class Navigation extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    getName = () => {
        const {firstName, lastName} = this.props
        let name = `${firstName} ${lastName}`
        return name
    }

    logout = () => {
        console.log("I am getting called")
        const {onLogout} = this.props
        onLogout()
        localStorage.removeItem("access_token")
        window.location = "/login"
    }


    render() {
        return (
            <div className="navigation-container">
                <div className="navigation-header-container" style={{backgroundImage: `url(${NavImage})`}}>
                    <div className="navigation-header-data-container">
                        <img src={AvatarProfile} style={{ width: "60px", height: "60px" }}/> 
                        {/* <NavUser style={{ width: "60px", height: "60px" }} /> */}
                        <div className="navigation-header-user-data-container">
                            <div className="navigation-header-user-name-container">{this.getName()}</div>
                            {/* <div className="navigation-header-user-level-container">(Level)</div> */}
                        </div>
                    </div>

                </div>
                <div className="navigation-data-container">
                    <Link to={"/home"}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={HomeNavIcon} className="navigation-icon"/>   
                                <div className="navigation-data-item-text-container">Home</div>
                            </div>
                           
                        </div>
                    </Link>
                    <Link to={"/introduction"}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={MiniBytesNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">Introduction</div>
                            </div>
                          
                        </div>
                    </Link>

                    <Link to={'/donate-tokens'}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={DonateNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">Donate</div>
                            </div>
                            
                        </div>
                    </Link>

                    <Link to={"/leaderboard"}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={LeaderNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">Leaderboard</div>
                            </div>
                            
                        </div>
                    </Link>

                    <Link to={'/earn-token'}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={EarnNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">Earn Tokens</div>
                            </div>
                          
                        </div>
                    </Link>

                    <Link to={"/wallet"}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={WalletNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">My Wallet</div>
                            </div>
                          
                        </div>
                    </Link>

                    <Link to={"/bonus-reward"}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={BonusNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">Bonus Reward</div>
                            </div>
                           
                        </div>
                    </Link>

                  

                    <Link to={'/settings'}>
                        <div className="navigation-data-item-container">
                            <div className="navigation-element-container">
                                <img src={SettingsNavIcon} className="navigation-icon"/>
                                <div className="navigation-data-item-text-container">Setting</div>
                            </div>
                           
                        </div>
                    </Link>


                </div>

                {/* <Link to={'/login'}> */}
                    <div className="navigation-data-sign-out-container" onClick = {this.logout}>
                        Sign Out
                    </div>
                {/* </Link> */}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    let gameData = state.GameReducer
    let login = gameData.login
    let firstName = "", lastName = ""

    if(login){
        firstName = login.firstName
        lastName = login.lastName
       
    }
    return {
        firstName,
        lastName,
       
    }
}

const mapActiontoProps = {
    onLogout
}

export default connect(mapStateToProps, mapActiontoProps)(Navigation)