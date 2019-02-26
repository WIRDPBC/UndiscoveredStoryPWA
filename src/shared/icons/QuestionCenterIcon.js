/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'

//Custom Import
import { getSizeDimension } from './utils'


const QuestionCenterIcon = ({ fill, size, style, className, circleClassName, onClick, id }) => {
    const sizeStyle = getSizeDimension(size)
    return (
        <svg style={{ ...sizeStyle, ...style }} onClick={onClick} className={className} id="ART" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="linear-gradient" x1="-9.2" y1="57.2" x2="37.52" y2="10.48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#273a9b" /><stop offset="0.56" stop-color="#202f65" /><stop offset="1" stop-color="#021e2f" />
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="-589.5" y1="62.54" x2="-589.5" y2="-10.77" gradientTransform="translate(-576 39) rotate(180)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#27e9de" /><stop offset="0.52" stop-color="#03a4ec" /><stop offset="1" stop-color="#2547a8" />
                </linearGradient>
                <linearGradient id="linear-gradient-3" x1="-14.39" y1="-5.65" x2="27.61" y2="39.52" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-2"/>
                <linearGradient id="linear-gradient-4" x1="-4.58" y1="-14.77" x2="37.42" y2="30.4" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-2"/>
                <linearGradient id="linear-gradient-5" x1="40.5" y1="7.56" x2="18.03" y2="30.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" /><stop offset="0.52" stop-color="#cce2e6" /><stop offset="1" stop-color="#8fa1bb" />
                </linearGradient>
                <linearGradient id="linear-gradient-6" x1="0.7" y1="0.7" x2="59.48" y2="59.48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3c57a" /><stop offset="0.49" stop-color="#f39369" /><stop offset="1" stop-color="#e94867" />
                </linearGradient>
                <linearGradient id="linear-gradient-7" x1="51.74" y1="74.65" x2="28.91" y2="10.65" xlinkHref="#linear-gradient-6"/><linearGradient id="linear-gradient-8" x1="39.9" y1="78.88" x2="17.07" y2="14.88" xlinkHref="#linear-gradient-6"/>
                <linearGradient id="linear-gradient-9" x1="34.5" y1="17.93" x2="34.5" y2="-9.41" xlinkHref="#linear-gradient"/>
            </defs>
            <title>solution, puzzle, strategy, business</title>
            <path style={{fill: "url(#linear-gradient)"}} d="M24,43.09V38.42a.47.47,0,0,1,.42-.45,3.5,3.5,0,0,0,0-6.95.47.47,0,0,1-.42-.45V24H17.47a.51.51,0,0,0-.5.47,3.5,3.5,0,0,1-6.94,0,.51.51,0,0,0-.5-.47H4.91A1.91,1.91,0,0,0,3,25.91v8.72A10.37,10.37,0,0,0,13.37,45h8.72A1.91,1.91,0,0,0,24,43.09Z" />
            <path style={{fill: "url(#linear-gradient-2)"}} d="M4.91,24H9.58a.47.47,0,0,1,.45.42,3.5,3.5,0,0,0,6.95,0,.47.47,0,0,1,.45-.42H24V17.36a.38.38,0,0,0-.36-.37,3.5,3.5,0,0,1,0-7A.38.38,0,0,0,24,9.65V4.91A1.91,1.91,0,0,0,22.09,3H13.37A10.37,10.37,0,0,0,3,13.37v8.72A1.91,1.91,0,0,0,4.91,24Z" />
            <path style={{fill: "url(#linear-gradient-3)"}} d="M13.47,24.42A3.49,3.49,0,0,1,11.75,27,3.49,3.49,0,0,0,17,24.42a.47.47,0,0,1,.45-.42h-3.5A.47.47,0,0,0,13.47,24.42Z" />
            <path style={{fill: "url(#linear-gradient-4)"}} d="M23.64,10A.38.38,0,0,0,24,9.65V4.91A1.91,1.91,0,0,0,22.09,3h-3.5A1.91,1.91,0,0,1,20.5,4.91V9.65a.38.38,0,0,1-.36.37,3.5,3.5,0,0,0,0,7,.38.38,0,0,1,.36.37V24H24V17.36a.38.38,0,0,0-.36-.37,3.5,3.5,0,0,1,0-7Z" />
            <path style={{fill: "url(#linear-gradient-5)"}} d="M24,5V9.64a.47.47,0,0,1-.42.45,3.5,3.5,0,0,0,0,6.95.47.47,0,0,1,.42.45v6.58h6.78a.23.23,0,0,0,.22-.22,3.5,3.5,0,0,1,7,0,.23.23,0,0,0,.22.22h4.88A1.91,1.91,0,0,0,45,22.16V13.43A10.37,10.37,0,0,0,34.63,3.06H25.91A1.91,1.91,0,0,0,24,5Z" />
            <path style={{fill: "url(#linear-gradient-6)"}} d="M43.09,24H38.42a.47.47,0,0,1-.45-.42,3.5,3.5,0,0,0-6.95,0,.47.47,0,0,1-.45.42H24v6.65a.38.38,0,0,0,.36.37,3.5,3.5,0,0,1,0,7,.38.38,0,0,0-.36.37v4.74A1.91,1.91,0,0,0,25.91,45h8.72A10.37,10.37,0,0,0,45,34.63V25.91A1.91,1.91,0,0,0,43.09,24Z" />
            <path style={{fill: "url(#linear-gradient-7)"}} d="M43.09,24H38.42a.47.47,0,0,1-.45-.42,3.5,3.5,0,0,0-6.95,0,.47.47,0,0,1-.45.42H24v3.06h6.58a.47.47,0,0,0,.45-.42,3.5,3.5,0,0,1,6.95,0,.47.47,0,0,0,.45.42h4.67A1.91,1.91,0,0,1,45,29V25.91A1.91,1.91,0,0,0,43.09,24Z" />
            <path style={{fill: "url(#linear-gradient-8)"}} d="M24.36,41a3.5,3.5,0,0,0,3.14-3.48A3.46,3.46,0,0,0,27.13,36a3.49,3.49,0,0,1-2.78,2,.38.38,0,0,0-.36.37v3.06A.38.38,0,0,1,24.36,41Z" />
            <path style={{fill: "url(#linear-gradient-9)"}} d="M36.91,11.61a2.87,2.87,0,0,1-.15.95,2.28,2.28,0,0,1-.42.73,2.14,2.14,0,0,1-.65.5,2.58,2.58,0,0,1-.85.24l-.05,1.25c0,.08-.06.13-.18.17a1.75,1.75,0,0,1-.51.06h-.36l-.23,0a.25.25,0,0,1-.12-.07.2.2,0,0,1,0-.12l-.06-1.51a1.31,1.31,0,0,1,0-.33.42.42,0,0,1,.09-.21.33.33,0,0,1,.17-.11.8.8,0,0,1,.24,0h.09a1.46,1.46,0,0,0,.59-.11,1.19,1.19,0,0,0,.41-.29,1.14,1.14,0,0,0,.24-.42,1.85,1.85,0,0,0,.07-.52,1.82,1.82,0,0,0-.09-.56,1.2,1.2,0,0,0-.27-.44,1.21,1.21,0,0,0-.44-.29,1.87,1.87,0,0,0-.63-.1,2.3,2.3,0,0,0-.57.06,2.84,2.84,0,0,0-.43.14l-.3.14a.44.44,0,0,1-.18.06.13.13,0,0,1-.08,0,.19.19,0,0,1-.06-.1,1,1,0,0,1,0-.22c0-.09,0-.21,0-.36a1.94,1.94,0,0,1,0-.33.31.31,0,0,1,.08-.17.94.94,0,0,1,.25-.15,2.81,2.81,0,0,1,.43-.16,5.16,5.16,0,0,1,.56-.12,3.9,3.9,0,0,1,.64-.05,3.67,3.67,0,0,1,1.3.21,2.48,2.48,0,0,1,.88.56,2.28,2.28,0,0,1,.5.81A3,3,0,0,1,36.91,11.61ZM35,17.12a1.85,1.85,0,0,1,0,.44.64.64,0,0,1-.15.29.6.6,0,0,1-.28.15,1.57,1.57,0,0,1-.43.05,1.61,1.61,0,0,1-.44-.05.55.55,0,0,1-.43-.44,2.1,2.1,0,0,1,0-.44,2.2,2.2,0,0,1,0-.45.59.59,0,0,1,.15-.3.62.62,0,0,1,.28-.16,1.82,1.82,0,0,1,.44,0,1.78,1.78,0,0,1,.43,0,.56.56,0,0,1,.43.46A1.94,1.94,0,0,1,35,17.12Z" />
        </svg>
    )
}

export default QuestionCenterIcon