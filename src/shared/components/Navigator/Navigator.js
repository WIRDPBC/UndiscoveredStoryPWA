/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

 import React, { PureComponent } from 'react'
 import PropTypes from 'prop-types';
 import {Sidebar} from 'semantic-ui-react'

 //import css
 import './Navigator.css'

 //import components
 import Navigation from '../Navigation'


 class Navigator extends PureComponent{
     constructor(props){
         super(props)
     }

     render(){
         const {visible, onCloseSidebar} = this.props
         return (
             <div className="navigator-container">
                 <Sidebar.Pushable>
                    <Sidebar
                        animation='overlay'
                        icon='labeled'
                        inverted = "true"
                        onHide={onCloseSidebar}
                        vertical = "true"
                        visible={visible}
                        width='thin'
                    >
                         <Navigation />
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
             </div>
         )
     }
 }

 export default Navigator;