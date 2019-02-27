/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';

//import css
import './BonusReward.css'

//import components
import Navigator from '../Navigator'
import TopHeader from '../TopHeader';
import BonusItem from './BonusItem';


class BonusReward extends PureComponent {

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
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Bonus" />
                    <div className="bonus-container">
                    <BonusItem title="Monthly High Scorers bonus pool" tokens="40,000"/>
                    <BonusItem title="Weekly High Score bonus pool" tokens="20,000"/>
                    <BonusItem title="Weekly Random Bonus pool" tokens="20,000"/>
                    <BonusItem title="Weekly donation Bonus pool" tokens="20,000"/>
                       
                    </div>
                </Fragment>
            </Navigator>
        )
    }
}

export default BonusReward