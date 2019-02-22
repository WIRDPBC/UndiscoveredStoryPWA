import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'

//import css
import './Signup.css'

//import components..
import AuthContainer from '../AuthContainer'
import SignupForm from './SignupForm'



class Signup extends PureComponent{
    render(){
        return (
            <Fragment>
                <AuthContainer>
                    <SignupForm />
                </AuthContainer>
            </Fragment>
            
        )
    }
}


export default Signup