/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'
//Custom Import
import { getSizeDimension } from './utils'

const ComingSoonText = ({ fill, size, style, className, circleClassName, onClick, id }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={style} width="530" height="198" viewBox="0 0 386 198">
            <defs>
            </defs>
            <text style={{fill: "#e27b04",fontSize:"80px",fontFamily:"AmericanTypewriter-Bold, American Typewriter",fontWeight:"700"}}>
                <tspan x="0" y="76">C</tspan>
                <tspan y="76"> </tspan>
                <tspan style={{fill: "#d5a3cb"}} y="76">O</tspan>
                <tspan  y="76"> </tspan>
                <tspan style={{fill: "#e6016b"}} y="76">M</tspan>
                <tspan  y="76"> </tspan>
                <tspan style={{fill: "#cecaa2"}} y="76">I</tspan>
                <tspan  y="76"> </tspan>
                <tspan style={{fill: "#08c3ef"}} y="76">N</tspan>
                <tspan  y="76"> </tspan>
                <tspan style={{fill: "#8898bc"}} y="76">G</tspan>
                <tspan ><tspan x="0" y="106"></tspan>
                    <tspan x="0" y="136"></tspan>
                </tspan>
                <tspan style={{fontSize: "60px", fill: "#7f2295"}}>
                    <tspan x="0" y="166">S</tspan>
                    <tspan style={{fill: "#707070"}} y="166"> </tspan>
                    <tspan style={{fill: "#0cf0e8"}} y="166">O</tspan>
                    <tspan style={{fill: "#707070"}} y="166"> </tspan>
                    <tspan style={{fill: "#ff91af"}} y="166">O</tspan>
                    <tspan style={{fill: "#707070"}} y="166"> </tspan>
                    <tspan style={{fill: "#1932bf"}} y="166">N</tspan>
                    <tspan style={{fill: "#707070"}} y="166"> !</tspan>
                </tspan>
            </text>
        </svg >
    )
}


export default ComingSoonText