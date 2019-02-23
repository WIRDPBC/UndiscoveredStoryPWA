/**
 * Created By Nikita Mittal
 * 20th Feb 2019
 */

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class GetStartedCarousel extends PureComponent{
    // static propTypes = {

    // }

    // static defaultProps = {

    // }

    constructor(props){
        super(props)
    }

    onClick = (position) => {
        const {onGetStarted} = this.props
        console.log("On Item Clicked", position)
        if(position === 3){
            onGetStarted()
        }

    }

    onChangePosition = (position) => {
        const {onGetStarted} = this.props
        console.log("On Change Carousel", position)
        if(position === 3){
            onGetStarted()
        }
    }

    render(){
        return (
            <Carousel style={{height: "inherit"}} showThumbs={false} showArrows={false} showThumbs={false} dynamicHeight showStatus={false} onClickItem={this.onClick} onChange={this.onChangePosition} centerMode emulateTouch>
            <div style={{height: "515px", backgroundColor: "#f2f2f2"}}>
               
            </div>
            <div  style={{height: "515px", backgroundColor: "#f2f2f2"}}>
               
            </div>
            <div  style={{height: "515px", backgroundColor: "#f2f2f2"}}>
             
            </div>
            <div  style={{height: "515px", backgroundColor: "#f2f2f2"}}>
             
             </div>
        </Carousel>
        )
    }
}


export default GetStartedCarousel