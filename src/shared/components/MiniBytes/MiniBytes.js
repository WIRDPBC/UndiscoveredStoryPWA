/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'

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
                title: miniByteList[0].title,
                author: miniByteList[0].author,
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
                    title: miniByteList[nextId-1].title,
                    author: miniByteList[nextId-1].author,
                    id: nextId
                }
           
            })
        }
       
    }


    render(){
        const {visible, minibyte} = this.state
        const {title, author, id} = minibyte
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar} title="Mini Bytes"/>
                    <div className="mini-bytes-container">
                        <div className="mini-bytes-image-container" style={{backgroundImage: `url(${MiniByteImage})`,   backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', height: "175.5px"}}>
                            {/* <img src={MinibyteIcon}   className="mini-bytes-image"/> */}
                        </div>
                        <div className="mini-bytes-data-container">
                            <div className="mini-bytes-quote-container"> {title} <br/>
                            {author} 
                        </div>
                        {id !== miniByteList.length && <Button content="Next" style={{marginTop:"50px", float:"right", cursor:"pointer", backgroundColor: "#ebb0d0", color: "#fff"}}  onClick={this.onNext}></Button>}
                        </div>
                       
                    </div>
                </Fragment>
            </Navigator>

        )
    }
}

export default MiniBytes