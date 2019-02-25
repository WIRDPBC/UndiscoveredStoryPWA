/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';

//Custom Import..
import {getSizeDimension} from './utils'

const NavUser = ({fill, size, style, className, circleClassName, onClick, id}) => {
    const sizeStyle = getSizeDimension(size)
    return (
        <svg style={{ ...sizeStyle, ...style }} xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
        <defs>
        </defs>
        <path style={{fill}} id="iconmonstr-user-20" d="M31 0a31 31 0 1 0 31 31A31 31 0 0 0 31 0zm20.029 47.288c-.674-1.514-2.038-2.56-4.833-3.206-5.924-1.367-11.439-2.565-8.765-7.608 8.125-15.35 2.152-23.557-6.43-23.557-8.752 0-14.58 8.522-6.43 23.557 2.754 5.074-2.966 6.27-8.765 7.608-2.8.646-4.154 1.7-4.823 3.219a25.833 25.833 0 1 1 40.047-.013z"/>
    </svg>
    
    )
}

NavUser.propTypes = {

}

NavUser.defaultProps = {
    fill: "rgba(0,0,0,.26)"
}



export default NavUser