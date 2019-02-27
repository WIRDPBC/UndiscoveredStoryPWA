/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

 import React, { PureComponent, Fragment } from 'react'
 import PropTypes from 'prop-types'
 import {Checkbox} from 'semantic-ui-react'
 import { withRouter } from "react-router-dom";

 //import css
import './Settings.css'

//import components..
import TopHeader from '../TopHeader'
import Navigator from '../Navigator'
import NavUser from '../../icons/NavUser';

class Settings extends PureComponent{
    static propTypes = {

    }

    constructor(props){
        super(props)
        this.state = {
            visible: false,
            isAdvertisingActive : false
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

    onChangeAdvertising = () => {
        const {isAdvertisingActive} = this.state
        this.setState({
            isAdvertisingActive : !isAdvertisingActive
        })
        if(!isAdvertisingActive){
            this.props.history.push('/advertising-opt')
        }
    }


    render(){
        const {visible, isAdvertisingActive} = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Settings"/>
                    <div className="settings-container">
                        <div className="settings-user-data-container">
                            <NavUser fill="#ffffff" style={{height: "60px", width: "60px"}} className="settings-user-container"/>
                            <div className="settings-user-profile-container">
                                <div>Mary Doe</div>
                                <div>marrydoe@gmail.com</div>
                                <div>(Level)</div>
                            </div>
                        </div>
                        <div className="settings-advertising-container">
                            <div className="settings-advertising-text-container">Advertising OPT</div>
                            <div>
                                <Checkbox toggle onChange={this.onChangeAdvertising} checked={isAdvertisingActive}></Checkbox>
                            </div>
                            
                        </div>
                    </div>
                </Fragment>
            </Navigator>
        )
    }
}


export default withRouter(Settings)