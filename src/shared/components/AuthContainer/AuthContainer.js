/**
 * Created By Nikita Mittal
 * 21st Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'

//import css
import './AuthContainer.css'



// Importing Images

import Login from '../../icons/5_Login.jpg';

class AuthContainer extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid columns={2} style={{ padding: 0 }} className="auth-container">
                <Grid.Column width={10} style={{ padding: 0 }}>
                    <div className="auth-container-image-container">
                        <div className="auth-container-image-placeholder">
                            <img src={Login} style={{ height: "500px", width: "500px" }} />
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column width={6} style={{ padding: 0 }}>
                    <div className="auth-container-form-container">
                        {this.props.children}
                    </div>
                </Grid.Column>

            </Grid>
        )
    }
}


export default AuthContainer
