/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import components..
import HomeTab from './HomeTab'
import NavIcon from '../../icons/NavIcon'


class HomeData extends PureComponent{
    static propTypes = {
        onOpenSidebar : PropTypes.func
    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }

    onOpen = () => {
        const {onOpenSidebar} = this.props
        onOpenSidebar()
    }

    render(){
        return (
            <Fragment>
                 <div className="home-basic-data-container">
                <div className="home-header-container">
                    <NavIcon style={{ cursor: "pointer" }} onClick={this.onOpen}/>
                    <div className="home-header-text-container">Home</div>
                </div>
                <div className="home-image-container">
                    <div className="home-image-circle-container"></div>

                </div>
                <div className="home-image-user-data-container">
                    <div className="home-user-text-container">Mary Doe</div>
                    <div className="home-user-points-container">0/22</div>
                    <div className="home-user-yet-to-text-container">You are yet to start a game</div>
                    <Link to={'/start-game'}>
                        <Button size="medium" style={{ width: "200px", height: "40px", marginTop: "10px" }} primary>Play Now</Button>
                    </Link>
                   
                </div>

                <div className="home-earned-donated-container">
                    <div className="home-earned-card-conatiner"></div>
                    <div className="home-donated-card-container"></div>
                </div>

            </div>
            <HomeTab />
            </Fragment>
        )
    }
}

export default HomeData