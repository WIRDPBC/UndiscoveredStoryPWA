/**
 * Created By nikita Mittal
 * 27th Feb 2019
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

//import css
import './AddPayment.css'

//Custom Import


class AddPayment extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <TopHeaderBack />
            </div>
        )
    }
}

export default AddPayment
