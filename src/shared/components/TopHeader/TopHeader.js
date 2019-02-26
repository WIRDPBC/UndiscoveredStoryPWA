/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import {PropTypes} from 'prop-types'
import { PureComponent } from 'react';

//import css
import './TopHeader.css'

//import components..
import NavIcon from '../../icons/NavIcon'


class TopHeader extends PureComponent{
    constructor(props){
        super(props)
    }

    onOpen = () => {
        const {onOpenSidebar} = this.props
        onOpenSidebar()
    }

    render(){
        const {title} = this.props
        return (
            <div className="top-header-container">
            <NavIcon style={{ cursor: "pointer", position:"relative", top: "14px" }} onClick={this.onOpen}/>
            <div className="top-header-text-container">{title}</div>
        </div>
        )
    }
}

export default TopHeader