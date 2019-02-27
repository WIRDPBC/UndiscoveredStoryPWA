/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';


class Stats extends PureComponent{
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className="home-tab-no-game-history-text">
                There is no Stats available
            </div>
            
        )
    }
}

export default Stats