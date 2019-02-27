/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';

//import css
import './MiniBytes.css'

//import components..
import Navigator from '../Navigator'
import TopHeader from '../TopHeader';
import MinibyteIcon from '../../icons/MinibyteIcon.jpg'


class MiniBytes extends PureComponent{
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
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Mini Bytes"/>
                    <div className="mini-bytes-container">
                        <div className="mini-bytes-image-container">
                            <img src={MinibyteIcon}   className="mini-bytes-image"/>
                        </div>
                        <div className="mini-bytes-data-container">
                            <div className="mini-bytes-quote-container"> “Self-esteem means knowing you are the dream.” <br/>
                            – Oprah Winfrey </div>
                            <div className="mini-bytes-quote-container">
                            "The most common way people give up their power is by thinking they don't have any." <br/>
- Alice Walker  
                            </div>
                            <div className="mini-bytes-quote-container">
                            “Success is liking yourself, liking what you do, and liking how you do it.” <br/>
- Maya Angelou 

                            </div>
                        </div>
                    </div>
                </Fragment>
            </Navigator>

        )
    }
}

export default MiniBytes