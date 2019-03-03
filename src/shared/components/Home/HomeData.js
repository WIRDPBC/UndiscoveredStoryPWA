/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import components..
import HomeTab from './HomeTab'
import NavIcon from '../../icons/NavIcon'
import HomeIcon from '../../icons/HomeIcon.png'
import UserProfileIcon from '../../icons/UserProfileIcon.png'


class HomeData extends PureComponent{
    static propTypes = {
        onOpenSidebar : PropTypes.func
    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }

    onOpen = () => {
        const {onOpenSidebar} = this.props
        onOpenSidebar()
    }

    render(){
        return (
            <Fragment>
                 <div className="home-basic-data-container">
                <div className="home-header-container">
                    <NavIcon style={{ cursor: "pointer" }} onClick={this.onOpen}/>
                    <div className="home-header-text-container">Home</div>
                </div>
                <div className="home-image-container">
                    <div className="home-image-circle-container">
                        <img src={UserProfileIcon} style={{height: "103.7px", width: "103.7px"}}/>
                    </div>

                </div>
                <div className="home-image-user-data-container">
                    <div className="home-user-text-container">Mary Doe</div>
                    <div className="home-user-points-container">0/22</div>
                    <div className="home-user-yet-to-text-container">You have yet to start a game.</div>
                    <Link to={'/start-game'}>
                        <Button size="medium" style={{ width: "200px", height: "40px", marginTop: "10px" }} primary>Play Now</Button>
                    </Link>
                   
                </div>

                <div className="home-earned-donated-container">
                    <div className="home-earned-card-conatiner">
                        <div className="home-card-text">Earned</div>
                        <div className="home-card-amount-container">
                            <img src={HomeIcon} className="home-card-image"/>
                            <div className="home-card-tokens-text">88 Tokens</div>
                        </div>
                        <div className="home-card-amount-text">$13.20</div>
                    </div>
                    <div className="home-donated-card-container">
                    <div className="home-card-text">Donated</div>
                        <div className="home-card-amount-container">
                            <img src={HomeIcon} className="home-card-image"/>
                            <div className="home-card-tokens-text">0 Tokens</div>
                        </div>
                        <div className="home-card-amount-text">$00.00</div>
                    </div>
                </div>

            </div>
            <HomeTab />
            </Fragment>
        )
    }
}

export default HomeData