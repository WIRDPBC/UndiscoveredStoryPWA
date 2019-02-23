/**
 * Created By Nikita Mittal
 * 23rd Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

//import css
import './Home.css'

//import components
import Navigation from '../../icons/Navigation'

class Home extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-basic-data-container">
                    <div className="home-header-container">
                        <Navigation style={{ cursor: "pointer" }} />
                        <div className="home-header-text-container">Home</div>
                    </div>
                    <div className="home-image-container">
                        <div className="home-image-circle-container"></div>

                    </div>
                    <div className="home-image-user-data-container">
                        <div className="home-user-text-container">Mary Doe</div>
                        <div className="home-user-points-container">0/20</div>
                        <div className="home-user-yet-to-text-container">You are yet to start a game</div>
                        <Button size="medium" style={{ width: "200px", height: "40px", marginTop: "10px" }} primary>Play Now</Button>
                    </div>

                    <div className="home-earned-donated-container">
                        <div className="home-earned-card-conatiner"></div>
                        <div className="home-donated-card-container"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home