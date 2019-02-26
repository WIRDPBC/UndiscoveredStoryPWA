/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

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

    render(){
        const {title} = this.props
        return (
            <div className="top-header-back-container">
             <BackBtn iconStyle={{top: "18px"}}/>
            <div className="top-header-back-text-container">{title}</div>
        </div>
        )
    }
}

export default TopHeaderBack