/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import css
import './DonateTokens.css'

//import components
import TopHeader from '../TopHeader'
import Navigator from '../Navigator'
import DonateIcon from '../../icons/DonateIcon.png'
import DonationElement from './DonationElement';
import ComingSoon from '../ComingSoon';



class DonateTokens extends PureComponent {
    
    constructor(props){
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
        const {visible} = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
            <Fragment>
                <TopHeader onOpenSidebar={this.onOpenSidebar} title="Donate Tokens"/>
                <ComingSoon/>
                {/* <div className="donate-tokens-container">
                    <div className="donate-tokens-icon-container">
                        <img src={DonateIcon} alt="Donate Token" />
                    </div>
                    <div className="donate-token-text-container">
                        All tokens from incorrect answers and $0.05 from each purchased $0.15 token will be donated to vetted girl & women led initiatives.
                    </div>
                    <div className="donate-token-data-container">
                        <DonationElement title="Total Donation:" amount="$1.50" tokens="10"/>
                        <DonationElement  title="Donation from incorrect answers::" amount="$1.50" tokens="10"/>
                        <DonationElement title="Donation from wallet:" amount="$0.00" tokens="0"/>
                    </div>
                    <div className="donate-token-button-container">
                        <Link to={'/select-continent'}>
                            <Button content="Donate Tokens" primary className="donate-token-button"/>
                        </Link>
                    </div>
                </div> */}
            </Fragment>
            </Navigator>
        )
    }
}

export default DonateTokens