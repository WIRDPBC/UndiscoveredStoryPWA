/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'
//Custom Import
import { getSizeDimension } from './utils'

const OptionTwo = ({ fill, size, style, className, circleClassName, onClick, id }) => {
    const sizeStyle = getSizeDimension(size)
    return (
        <svg style={{ ...sizeStyle, ...style }} onClick={onClick} className={className} id="ART" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
        <defs>
           
            <linearGradient id="linear-gradient" x1="24" y1="-8.39" x2="24" y2="58.73" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f3c57a"/><stop offset="0.49"stopColor="#f39369"/><stop offset="1" stopColor="#e94867"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="24" y1="36.87" x2="24" y2="63.68" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#273a9b"/><stop offset="0.56" stopColor="#202f65"/><stop offset="1" stopColor="#021e2f"/>
            </linearGradient><linearGradient id="linear-gradient-3" x1="24" y1="-20" x2="24" y2="48.89" xlinkHref="#linear-gradient"/>
            <linearGradient id="linear-gradient-4" y1="45.42" y2="35.99" xlinkHref="#linear-gradient-2"/>
            <linearGradient id="linear-gradient-5" x1="24" y1="7.5" x2="24" y2="47.05" xlinkHref="#linear-gradient"/>
            </defs>
            <title>bulb, lightbulb, flash, light</title>
            <path style={{fill:"url(#linear-gradient)"}}  d="M40,19A16,16,0,1,0,13.8,31.24a11.31,11.31,0,0,1,4.1,7.06l.1.7H30a12.37,12.37,0,0,1,4.22-7.78A15.9,15.9,0,0,0,40,19Z"/>
            <path style={{fill:"url(#linear-gradient-2)"}} d="M18,39H30a0,0,0,0,1,0,0v3a3,3,0,0,1-3,3H21a3,3,0,0,1-3-3V39A0,0,0,0,1,18,39Z"/>
            <path style={{fill:"url(#linear-gradient-3)"}} d="M23.67,6a1.42,1.42,0,0,0-1.14.57,1.7,1.7,0,0,1-1.22.72,3,3,0,0,1,.39,2.63,2.93,2.93,0,0,1-2,1.94,3,3,0,0,1-3.64-1.73,1.67,1.67,0,0,1-1.49.09,1.6,1.6,0,0,0-1.75.32A15.87,15.87,0,0,0,8.1,20.41v.06a15.91,15.91,0,0,0,5.73,10.79,11.24,11.24,0,0,1,4.07,7L18,39H30a12.37,12.37,0,0,1,4.22-7.78,15.9,15.9,0,0,0,5.66-10.78A16,16,0,0,0,23.67,6Z"/>
            <rect style={{fill:"url(#linear-gradient-4)"}} x="18" y="39" width="12" height="1.5"/>
            <path style={{fill:"url(#linear-gradient-5)"}} d="M28.5,24.31a4.5,4.5,0,1,0-7.43,3.39,4.05,4.05,0,0,1,1.43,3.07V39h3V30.78A4.11,4.11,0,0,1,27,27.69,4.45,4.45,0,0,0,28.5,24.31Z"/>
            </svg>
    )
}


export default OptionTwo