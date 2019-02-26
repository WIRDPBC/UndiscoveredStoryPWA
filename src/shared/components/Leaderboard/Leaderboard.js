/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';

//import components..
import Navigator from '../Navigator'
import TopHeader from '../TopHeader';
import LeaderboardItem from './LeaderboardItem';

class Leaderboard extends PureComponent{

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



    render(){
        const {visible} = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Leaderboard"/>
                    <div className="leader-board-container">
                        <div className="leader-board-list-container">
                            <LeaderboardItem count="1." name="Gregory" points="101"/>
                            <LeaderboardItem count="2." name="Alex" points="97"/>
                            <LeaderboardItem count="3." name="Bre" points="88"/>
                            <LeaderboardItem count="4." name="Jack" points="75"/>
                            <LeaderboardItem count="5." name="Daniel" points="74"/>
                            <LeaderboardItem count="6." name="Ellie" points="72"/>
                            <LeaderboardItem count="7." name="Darius" points="71"/>

                            <div className="leader-board-great-text-container">Great going! You are among top 30% of users who have played this game.</div>
                            <LeaderboardItem count="24." name="Marry Doe" points="60" isLoginUser={true}/>
                        </div>
                       
                    </div>
                   

                </Fragment>
            </Navigator>
        )
    }
}

export default Leaderboard