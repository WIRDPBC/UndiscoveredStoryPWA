/**
 * Created By Nikita Mittal
 * 23rd Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Sidebar, Menu, Icon } from 'semantic-ui-react'

//import css
import './Home.css'

//import components
import HomeData from './HomeData'
import Navigation from '../Navigation'

class Home extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
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

    render() {

        const {visible} = this.state
        console.log("Visible state", visible)
        return (
            <div className="home-container">
                <Sidebar.Pushable>
                    <Sidebar
                        animation='overlay'
                        icon='labeled'
                        inverted = "true"
                        onHide={this.onCloseSidebar}
                        vertical = "true"
                        visible={visible}
                        width='thin'
                    >
                         <Navigation />
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        <HomeData onOpenSidebar={this.onOpenSidebar}/>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </div >
        )
    }
}

export default Home