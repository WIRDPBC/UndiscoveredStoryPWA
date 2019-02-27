/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

 import React, {PureComponent} from 'react'
 import PropTypes from 'prop-types';
 import {withRouter} from 'react-router-dom'

 //import css
 import './TopHeaderClose.css'

 //import components
 import CloseIcon from '../../icons/CloseIcon'

 class TopHeaderClose extends PureComponent{
     constructor(props){
         super(props)
     }

     onBack = () => {
         console.log("On Close")
        this.history.goBack()
    }


     render(){
        const {title} = this.props
        return (
            <div className="top-header-close-container">
             <CloseIcon size="small" style={{position: "relative",top: "18px", cursor:"pointer"}} onClick={this.onBack}/>
            <div className="top-header-close-text-container">{title}</div>
        </div>
        )
     }
 }

 export default withRouter(TopHeaderClose)