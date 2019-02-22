import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'

//import components..
import AuthContainer from '../AuthContainer'



class Signup extends PureComponent{
    render(){
        return (
            <Fragment>
                <AuthContainer/>
            </Fragment>
            
        )
    }
}


export default Signup