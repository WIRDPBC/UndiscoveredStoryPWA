/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';
//Custom Import..
import { getSizeDimension } from './utils'

const CloseIcon = ({ fill, size, style, className, circleClassName, onClick, id }) => {
    const sizeStyle = getSizeDimension(size)
    return (
        <svg style={{ ...sizeStyle, ...style }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="15.223" height="15.222" viewBox="0 0 15.223 15.222">
            <defs></defs>
            <g id="Group_619" data-name="Group 619" transform="rotate(45 12.14 5.735)">
                <path id="Line_22" d="M0 0v20.527" style={{fill: "none", stroke: "#707070"}} data-name="Line 22" transform="translate(10.264)" />
                <path id="Line_23" d="M20.527 0H0"  style={{fill: "none", stroke: "#707070"}} data-name="Line 23" transform="translate(0 10.264)" />
            </g>
        </svg>
    )
}

export default CloseIcon