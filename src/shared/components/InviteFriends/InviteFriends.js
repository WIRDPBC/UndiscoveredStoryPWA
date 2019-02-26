/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridRow, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

//import css
import './InviteFriends.css'

//import components
import TopHeaderBack from '../TopHeaderBack'
import InviteFriendsIcon from '../../icons/InviteFriendsIcon.png'


class InviteFriends extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <TopHeaderBack title="Invite Friends" />
                <div className="invite-friends-container">
                    <Grid className="invite-friends-grid-container" style={{ padding: 0 }}>

                        <GridRow className="invite-friends-invite-image-container" style={{ padding: 0 }}>
                            <div className="invite-friends-invite-image-data-container">
                                <img src={InviteFriendsIcon} alt="Invite Friends Icon" />
                                <div className="invite-friends-text-one-container">Get 3 USDG tokens for every friend who signs up and plays the game</div>
                                <div className="invite-friends-terms-and-conditions-container">Terms & conditions</div>
                                <div className="invite-friends-button-container">
                                    <Link to={'/invite-contacts'}>
                                        <Button primary content="Invite Contacts" style={{ width: "400px", height: "40px" }} />
                                    </Link>
                                </div>

                            </div>
                        </GridRow>
                        <GridRow className="invite-friends-invite-text-container" style={{ padding: 0 }}>
                            <div className="invite-friends-referral-container">
                                <div className="invite-friends-or-text-container">
                                    Or
                            </div>
                                <div className="invite-friends-share-your-text-container">Share your link</div>
                                <div className="invite-friends-referral-text-container">
                                    <div className="invite-friends-referral-text">
                                    <span>BBLOCKCHAINN001</span>
                                    <span className="invite-friends-referral-copy-text">Copy</span>
                                    </div>
                                   
                                </div>
                            </div>

                        </GridRow>
                    </Grid>
                </div>

            </Fragment>
        )
    }
}

export default InviteFriends