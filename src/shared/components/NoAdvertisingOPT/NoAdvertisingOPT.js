/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import TopHeaderBack from '../TopHeaderBack';

//import css
import './NoAdvertisingOPT.css'



class NoAdvertisingOPT extends PureComponent{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <Fragment>
                <TopHeaderBack title="Advertising OPT-IN"/>
                <div className="no-advertising-opt-container">
                    <div>You Don't have any advertising messages now</div>
                    <div>Turn on Advertising OPT-IN to view and comment on partner ads to earn tokens</div>
                    <div>Go to Settings to turn on the Advertising OPT-IN</div>
                </div>
            </Fragment>
        )
    }
}

export default NoAdvertisingOPT