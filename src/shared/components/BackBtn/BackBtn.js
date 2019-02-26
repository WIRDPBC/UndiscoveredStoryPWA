/**
 * Created By Nikita Mittal
 * 26th feb 2019
 */

import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'

//import css
import './BackBtn.css'

//import components
import BackIcon from '../../icons/BackIcon'


class BackBtn extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        const {iconStyle} = this.props
        return (
            <Fragment>
                 <BackIcon size="tiny" style={{ position: "relative", top: "3px", cursor: "pointer", ...iconStyle }} />
                <div className="back-container-text">Back</div>
            </Fragment>
        )
    }
}

export default BackBtn