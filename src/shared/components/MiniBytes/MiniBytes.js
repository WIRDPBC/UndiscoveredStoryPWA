/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

//import css
import './MiniBytes.css'

//import images 
import MiniByteImage from '../../icons/MiniBytesImage.png'

//import components..
import Navigator from '../Navigator'
import TopHeader from '../TopHeader';
import {miniByteList} from './helper'
import MinibyteIcon from '../../icons/MinibyteIcon.jpg'


class MiniBytes extends PureComponent{
    constructor(props){
        super(props)
        console.log("Minibyte List", miniByteList[0])
        this.state = {
            visible: false,

            minibyte : {
                // title: miniByteList[0].title,
                content: miniByteList[0].content,
                id: miniByteList[0].id
            }
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

    onNext = () => {
        const {minibyte} = this.state
        const {id} = minibyte
        console.log("On Next getting called", id, miniByteList.length)
        if(id !== miniByteList.length){
            let nextId = id + 1
            this.setState({
                minibyte:{
                    // title: miniByteList[nextId-1].title,
                    content: miniByteList[nextId-1].content,
                    id: nextId
                }
           
            })
        }
       
    }

    goToHome = () => {
        const {history} = this.props
        history.push('./home')
    }


    render(){
        const {visible, minibyte} = this.state
        const { content, id} = minibyte
        console.log("Mini Byte", minibyte)
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Introduction"/>
                    <div className="mini-bytes-container">
                        <div className="mini-bytes-image-container" style={{backgroundImage: `url(${MiniByteImage})`,   backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', height: "175.5px"}}>
                        </div>
                        <div className="mini-bytes-data-container">
                            {content}
                        </div>
                        <div className="mini-bytes-next-button-container">
                        {id !== miniByteList.length && <Button content="Next" style={{cursor:"pointer", backgroundColor: "#ebb0d0", color: "#fff" }}  onClick={this.onNext}></Button>}
                        {id === miniByteList.length && <Button content="Go To Home" style={{cursor:"pointer", backgroundColor: "#ebb0d0", color: "#fff" }} onClick={this.goToHome}/>}
                        </div>
                    
                       
                    </div>
                </Fragment>
            </Navigator>

        )
    }
}

export default withRouter(MiniBytes)