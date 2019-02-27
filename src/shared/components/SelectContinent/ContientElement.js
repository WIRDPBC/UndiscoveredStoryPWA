/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


const ContinentElement = (props) =>{

    const {name, color} = props
    return (
        <div className="continent-element-container" style={{color: color}}>
            {name}
        </div>
    )
}

export default ContinentElement;