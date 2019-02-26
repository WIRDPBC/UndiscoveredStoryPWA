/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

 import React, {PureComponent} from 'react'
 import PropTypes from 'prop-types';

 //import css
 import './TopHeaderClose.css'

 //import components
 import CloseIcon from '../../icons/CloseIcon'

 class TopHeaderClose extends PureComponent{
     constructor(props){
         super(props)
     }

     render(){
        const {title} = this.props
        return (
            <div className="top-header-close-container">
             <CloseIcon size="small" style={{position: "relative",top: "18px", cursor:"pointer"}}/>
            <div className="top-header-close-text-container">{title}</div>
        </div>
        )
     }
 }

 export default TopHeaderClose