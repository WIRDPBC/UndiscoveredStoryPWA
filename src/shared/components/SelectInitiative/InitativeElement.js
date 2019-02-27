/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';


//import components


const InitativeElement = (props) => {
    const {image, name, imageStyle, onSelect, isSelected, imageClass} = props
    let className="initative-element-container"
    if(isSelected){
        className = `${className} selected-initiative`
    }

    const onClick = () => {

        onSelect(name)
    }

    return (
        <div className={className} onClick={onClick}>
            <img src={image} alt={name} className={imageClass} />
            <div className="initiative-element-name">{name}</div>
            <div className="initiative-element-visit-text">Visit Website</div>
        </div>
    )
}

export default InitativeElement