/**
 * Created By Nikita Mittal
 * 20th Feb 2019
 */

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import learnEarnSupport from '../../icons/1_learnearnsupport.jpg';
import Learn from '../../icons/2_Learn.jpg';
import Earn from '../../icons/3_Earn.jpg';
import Support from '../../icons/4_Support.jpg';


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
            <Carousel style={{height: "inherit"}} showThumbs={false} showArrows={false} showThumbs={false} showStatus={false} onClickItem={this.onClick} onChange={this.onChangePosition} emulateTouch >
            <div style={{backgroundColor: "#f2f2f2"}} className="get-started-carousel-background-container">
                <div className="get-started-carousal-heading-container">LEARN, EARN & SUPPORT</div>
                <img src={learnEarnSupport} className="get-started-carousal-image"/>

               
            </div>
            <div  style={{backgroundColor: "#f2f2f2"}} className="get-started-carousel-background-container">
            <div className="get-started-carousal-heading-container">LEARN</div>
                <img src={Learn} className="get-started-carousal-image"/>
            </div>
            <div  style={{ backgroundColor: "#f2f2f2"}} className="get-started-carousel-background-container">
            <div className="get-started-carousal-heading-container">EARN</div>
                <img src={Earn} className="get-started-carousal-image"/>
            </div>
            <div  style={{ backgroundColor: "#f2f2f2"}} className="get-started-carousel-background-container">
            <div className="get-started-carousal-heading-container">SUPPORT</div>
                <img src={Support} className="get-started-carousal-image"/>
             </div>
        </Carousel>
        )
    }
}


/**
 * Created By Nikita Mittal
 * 20th Feb 2019
 */

// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";


// // Importing Images For Carousel View
// import learnEarnSupport from '../../icons/1_learnearnsupport.jpg';
// import Learn from '../../icons/2_Learn.jpg';
// import Earn from '../../icons/3_Earn.jpg';
// import Support from '../../icons/4_Support.jpg';






// class GetStartedCarousel extends PureComponent {
//     // static propTypes = {

//     // }

//     // static defaultProps = {

//     // }

//     constructor(props) {
//         super(props)
//     }

//     onClick = (position) => {
//         const { onGetStarted } = this.props
//         console.log("On Item Clicked", position)
//         if (position === 3) {
//             onGetStarted()
//         }

//     }

//     onChangePosition = (position) => {
//         const { onGetStarted } = this.props
//         console.log("On Change Carousel", position)
//         if (position === 3) {
//             onGetStarted()
//         }
//     }

//     render() {
//         return (
//             <Carousel style={{ height: "inherit" }} showThumbs={false} showArrows={false} showThumbs={false} dynamicHeight showStatus={false} onClickItem={this.onClick} onChange={this.onChangePosition} centerMode emulateTouch>
//                 <div style={{ height: "515px", backgroundColor: "#f2f2f2" }}>
//                     <img src={learnEarnSupport} style={{ height: "515px", width: "515px" }} />
//                 </div>
//                 <div style={{ height: "515px", backgroundColor: "#f2f2f2" }}>
//                     <img src={Learn} style={{ height: "515px" }} />
//                 </div>
//                 <div style={{ height: "515px", backgroundColor: "#f2f2f2" }}>
//                     <img src={Earn} style={{ height: "515px"}} />
//                 </div>
//                 <div style={{ height: "515px", backgroundColor: "#f2f2f2" }}>
//                     <img src={Support} style={{ height: "515px" }} />
//                 </div>
//             </Carousel>
//         )
//     }
// }


export default GetStartedCarousel