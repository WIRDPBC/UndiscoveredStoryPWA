/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


const ContinentElement = (props) =>{

    const {name, color, onSelect, isSelected} = props
    let className="continent-element-container"
    if(isSelected){
        className = `${className} selected`
    }

    const onClick = () => {
        onSelect(name)
    }
    return (
        <div className={className} style={{color: color}} onClick={onClick}>
            {name}
        </div>
    )
}

export default ContinentElement;