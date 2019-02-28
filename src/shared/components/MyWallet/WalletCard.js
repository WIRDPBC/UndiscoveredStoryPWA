/**
 * Created By Nikita MIttal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class WalletCard extends PureComponent{
    static propTypes = {

    }

    static defaultProps= {

    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="wallet-card-container">
            <Link to={'/purchase-tokens'}>
                <Button content="Purchase" basic primary style={{position:"relative", top: "42%"}}/>
            </Link>
            

            </div>
        )
    }
}

export default WalletCard