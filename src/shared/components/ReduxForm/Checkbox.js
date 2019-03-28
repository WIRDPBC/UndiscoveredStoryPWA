/**
 * Created by Robins Gupta 
 * 24th March 2018
 */

import React from "react";
import {
    Label,
    Checkbox,
    Form,
  } from 'semantic-ui-react';
import { object } from 'prop-types';



/**
 * Used for Redux Form For Material Input UI
 * @param {*} props 
 */
const CheckboxField = (style,{input: { value, onChange, ...input }, meta: { touched, error }, ...rest}) => {

    return(
        <Form.Input >
            <Checkbox
                style={style}
                checked
                {...input}
                {...rest}
                onChange={(e, data) => onChange(data.checked)}
            />
        </Form.Input>
    );
}


CheckboxField.propTypes = {
    input: object.isRequired,
    meta: object.isRequired
};
  
CheckboxField.defaultProps = {
    input: null,
    meta: null
};


export default CheckboxField;