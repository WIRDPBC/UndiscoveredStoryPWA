/**
 * Created By Nikita Mittal
 * 27th Jan 2019
 */
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
//import css
import './GetStarted.css'

//import components..
import GetStartedCarousel from './GetStartedCarousel'

class GetStarted extends PureComponent{
    render(){
        return(
            <div className="get-started-container">
                <div className="get-started-heading-container">Undiscovered Story</div>
                <div className="get-started-carousel-container">
                    <GetStartedCarousel />
                </div>
                <div className="get-started-login-container">
                    <Link to={"/signup"}><Button content="Get Started" size="medium" style={{width: "200px", height: "40px"}} primary/></Link>
                    <div className="get-started-already-account-container">
                        <span className="get-started-already-account-text">Already have an account?</span>
                        <Link to={"/login"}><span className="get-started-login-text"> Login</span></Link>

                        </div>
                </div>
            </div>
        )
    }
}


export default GetStarted
