/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';

//Custom Import
import {getSizeDimension} from './utils'

const HourGlass = ({ fill, size, style, className, circleClassName, onClick, id }) => {
    const sizeStyle = getSizeDimension(size)
    return (
        <svg style={{ ...sizeStyle, ...style }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <defs>
        <pattern id="pattern" width="1" height="1" patternTransform="matrix(1 0 0 -1 0 40)" viewBox="0 0 20 20">
            <image width="20" height="20" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
        </pattern>
    </defs>
    <path id="Image_28" d="M0 0h20v20H0z" style={{opacity: ".51", fill: "url(#pattern)"}} data-name="Image 28" transform="rotate(180 10 10)"/>
</svg>

    )
}

export default HourGlass