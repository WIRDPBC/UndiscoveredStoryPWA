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

    onClick = (e) => {
        console.log("On Item Clicked", e)
    }

    render(){
        return (
            <Carousel showThumbs={false} showArrows={false} showThumbs={false} dynamicHeight showStatus={false} onClickItem={this.onClick}>
            <div >
               
            </div>
            <div >
               
            </div>
            <div >
             
            </div>
        </Carousel>
        )
    }
}


export default GetStartedCarousel