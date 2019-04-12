/**
 * Created by Nikita Mittal
 * 12th April 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react'

//import css
import './ComingSoon.css'

//import images 
import ComingSoonImage from '../../icons/ComingSoonImage.png'
import ComingSoonFooter from '../../icons/ComingSoonFooter'
import CommingSoonText from '../../icons/CominSoonText'


class ComingSoon extends PureComponent{
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props){
        super(props)
    }

    render(){
        const {style} = this.props
        return (
            <div style={style}>
                <Container style={{marginTop:"50px"}}>
                    <div className="coming-soon-image-container">
                        <img src={ComingSoonImage} style={{height:"200px", width:"200px"}}/>
                        <CommingSoonText/>
                    </div>
                   
                </Container>
                <div style={{position:"absolute", bottom: "0px", marginLeft:"30px"}}>
                    <ComingSoonFooter/>
                </div>
            </div>
        )
    }
}


export default ComingSoon