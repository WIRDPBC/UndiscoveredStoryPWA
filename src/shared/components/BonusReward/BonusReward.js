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
import InfoDialog from '../InfoDialog/InfoDialog';


class BonusReward extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            isDialogOpened: false,
            dialogTitle: "",
            dialogText: ""
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


    onCloseDialog = () => {
        this.setState({
            isDialogOpened : false
        })
    }

    onSelect = (tag) => {
        if(tag === "Monthly High Scorers bonus pool"){
            this.setState({
                isDialogOpened: true,
                dialogTitle: tag,
                dialogText:"The computer program will randomly select 15 countries and the highest scoring players from the 15 selected countries and award UDGT to one player in each of the country.  In the event of a tie score the UDGT will be divided equally amoung the winners.  "
            })

        } else if(tag === "Weekly High Score bonus pool"){
            this.setState({
                isDialogOpened: true,
                dialogTitle: tag,
                dialogText:"The computer program will select the worldwide highest scoring player.  In the event of a tie score the UDGT tokens will be divided equally among the winners.  "
            })

        } else if(tag === "Weekly Random Bonus pool"){
            this.setState({
                isDialogOpened: true,
                dialogTitle: tag,
                dialogText:"The computer program will randomly select one player player per week and award them with UDGT tokens. "
            })

        } else if(tag === "Weekly donation Bonus pool"){
            this.setState({
                isDialogOpened: true,
                dialogTitle: tag,
                dialogText:"The computer program will randomly select one girls or women led intiative per week and award them with 20,000 UDGT tokens. "
            })
        }
    }


    render() {
        const {visible, isDialogOpened, dialogText, dialogTitle} = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Bonus" />
                    <div className="bonus-container">
                    <BonusItem title="Monthly High Scorers bonus pool" tokens="40,000" onSelect = {this.onSelect}/>
                    <BonusItem title="Weekly High Score bonus pool" tokens="20,000" onSelect = {this.onSelect}/>
                    <BonusItem title="Weekly Random Bonus pool" tokens="20,000" onSelect = {this.onSelect}/>
                    <BonusItem title="Weekly donation Bonus pool" tokens="20,000" onSelect = {this.onSelect}/>
                       
                    </div>
                </Fragment>
                <InfoDialog isDialogOpened={isDialogOpened} infoText={dialogText} title={dialogTitle} onClose={this.onCloseDialog}/>
            </Navigator>
        )
    }
}

export default BonusReward