/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

//import css
import './TopHeaderBack.css'

//import components..
import BackBtn from '../BackBtn'


class TopHeaderBack extends PureComponent{
    static propTypes = {

    }

    constructor(props){
        super(props)
    }

    onBack = () => {
        this.props.history.goBack()
    }

    render(){
        const {title} = this.props
        return (
            <div className="top-header-back-container">
             <BackBtn iconStyle={{top: "18px"}} onClick={this.onBack}/>
            <div className="top-header-back-text-container">{title}</div>
        </div>
        )
    }
}

export default withRouter(TopHeaderBack)