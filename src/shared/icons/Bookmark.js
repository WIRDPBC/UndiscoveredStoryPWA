/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types'

//custom import
import {getSizeDimension} from './utils'


const Bookmark = ({ fill, size, style, className, circleClassName, onClick, id }) => {
    const sizeStyle = getSizeDimension(size)
    return (
        <svg style={{ ...sizeStyle, ...style }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <defs>
            </defs>
            <image id="Image_27" width="20" height="20" style={{ opacity: ".515" }} data-name="Image 27" xlinkHref="data:image/png;base64,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AUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAUflFpZmwAHTisoTZcABR+UWlmbAAdOKyhNlwAFH5RaWZsAB04rKE2XAAbNzf9PwvmMjSpdm4H4DTvh9pXE+/t/v+u8E5mL0F9xAwkX+eEfD+rME9h3o/hHJAPkS/9VCvX1ErPq7+gzZwRH4/hXBAPXy3m1xLh8jUH2mPkv1cAwFfmRkA8SLe7sFubRHlPpsfYfoYg8NfnREA7RLe7NFuHCCEPWd+i7NxwlU+JWRDJAu7PUm/twE+fXdegbJyQQdfnUEA5TLerXJPjOD8HpGPYviZQYlPqJnA4SL+ukCguuZBDcLqPGRPRkY+ZL+3US+u6DMena9Y2RHC+rx0T0YGPVy3mvyXltBYL2j3jWqpxUU+YotDYx4Me80YS+uKK3eVe8c0dWKmnzVFgZGu5S3mqSLG4iqd9a7R/O1gSpfuaaBkS7kjSbm/JpyDr2r3l1nGMnZIQT/L83AKJfxWhN/tgP5dYY6yyjeOlDmEZY0MMJF/LwJOL2khD2fXWepM43gbk80Pz6agZ4vYf0I5/2OhdbZev8xU8f6PNocBnod8B8N7o05ABd+Rp2xztqrx4XxffzWBnq8eL82KS9vLWaP99dZ68w9utwDw4+OaKC3S/dTk/jcgCLrzHX23nwOqNIj72Ogpwv3fTv40/scvrPP1tmLoSennSnyOHMb6OWyfdXAnpgbboPnFUOx9OJ1AwW+ck0DPVy0LxpwTz8mmuq/WIqpB7dTWfx+5wa2vmQfdO5nyvGKbWu/U87vdwcwsNUF+7O5eXMAP1OPWIzFupXnqef3+50b2OJi/dacvNK5lzmPV6zFvIXrOTl8VocG1r5UPzcHz3foYekjFXOxr+17aS6fv7GBNS/UD431mY15t3x9sZeDNZ1vyeu7VzCw1mX6urE8uQJP768oB+ViLe+9+/B8Ew2scZG+bGesf1jMX/8aKBflZA33OocbWPoSfQj3NwWv3Cztf8r5/O4ABpa6QPWPhr01AP/WRyxHS/4Da1vz+f6FDSwx4N/bmV9d+Nykx5ercrZEC5InWXYYmPvS/NLe8cKO9/hHRxsoZ+Vu7h5Hv9W/Hd7AnBfmx2bj2eGNbAdQ7srhnE22o/HNqxiY67J820771ConZr+kHJbLubqwbUk3y0W50jz6Y6L5LlO5LKdzjHi+U/mkLg1MvSQfdUnFOFS5ndqHYUKKhxo46QWpH32889Cn+hdzGSjHU37MNNc5fE6nBk4y4LuN5XKnPMRjletyfpJWRB8yHTCw76W43b576cD3/c91DJTzcr9vr3VO51s2M7DPhbjZTnlhs5P64nJfDfZppjW4geNehuvNwzm4ixHwqkG1OG63EZg84wQDx7kIV9vzz0x4h1+d10C1qCbHaTfvm31adwYedQk+6e7EHuiBgWrzqH4PPuv/Qg087ALUP9r1HpSZhFWNjvoH1kissuwwsGvA99rnXt/xWf+oTwPVqprtatnniT3VbAYOR7/TnvzSbE/3QWsZqGbV7nDPtd7vezYycDD4rXaGixudw9dON1DtquHBptOf6hO6NvAg9o12yvNdn9TDHcdANayWD7oe5zt+ZmADFfpa+312YAaP/n8D1bKaVlt/wQ181vhOwxkT8apptY369Q+LhwAQBS+HdAAAAABJRU5ErkJggg==" />
        </svg>

    )
}

export default Bookmark