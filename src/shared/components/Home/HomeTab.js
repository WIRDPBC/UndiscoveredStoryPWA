/**
 * Created By Nikita Mittal
 * 23rd feb 2019
 */

import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';


//import components..
import HistoryTab from './HistoryTab';
import Badges from './Badges';
import Stats from './Stats'


class HomeTab extends PureComponent{
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props){
        super(props)

        this.state = {
            tabSelected : "history"
        }
    }


    onHistorySelected = () => {
        this.setState({
            tabSelected : "history"
        })
    }

    onBadgesSelected = () => {
        this.setState({
            tabSelected : "badges"
        })
    }

    onStatsSelected = () => {
        this.setState({
            tabSelected : "stats"
        })
    }

    render(){
        const {tabSelected} = this.state
        let hsitoryTextStyle = {}, badgesTextStyle = {}, statsTextStyle = {}
        if(tabSelected === "history"){
            hsitoryTextStyle = {
                color: "#707070"
            }
        }
        if(tabSelected === "badges"){
            badgesTextStyle = {
                color: "#707070"
            }
        }
        if(tabSelected === "stats"){
            statsTextStyle = {
                color: "#707070"
            }
        }
        return (
            <div className="home-tab-container">
                <div className="home-tab-text-container">
                    <div className="home-tab-history-container" style={hsitoryTextStyle} onClick={this.onHistorySelected}>History</div>
                    <div className="home-tab-badges-container" style={badgesTextStyle} onClick={this.onBadgesSelected}>Badges</div>
                    <div className="home-tab-stats-container" style={statsTextStyle} onClick={this.onStatsSelected}>Stats</div>
                </div>
                <div>
                    {tabSelected === "history" && 
                       <HistoryTab />
                    }
                    {tabSelected === "badges" && 
                        <Badges />
                    }
                    {tabSelected === "stats" && 
                        <Stats />
                    }
                </div>
            </div>
        )
    }
}

export default HomeTab