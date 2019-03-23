/**
 * Created By Nikita Mittal
 * 15th March 2019
 */

import React from "react"
import PropTypes from 'prop-types'
import {
    Form,
    Message,
  } from 'semantic-ui-react'

/**
 * SnaphyForm class
 * Will handle like redux Form. With Error message support..
 **/
class WirdForm extends React.PureComponent{

  static propTypes = {
    //methods
    onSubmit: PropTypes.func,

    //Prop
    noValidate: PropTypes.bool,
    error: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    errorHeading: PropTypes.string,
  }

  static defaultProps = {
    noValidate: false,
    error: false,
    style: {},
    className: "",
    errorHeading: ""
  }


    constructor(props){
        super(props);
    }

    //Render..
    render(){
       let novalidate = this.props.noValidate;
        return (
            <Form noValidate={novalidate}
            onSubmit={this.props.onSubmit}
            error={this.props.error}
            style={this.props.style}
            className={this.props.className} >
                {
                    this.props.error &&  this.props.errorHeading &&  (<Message error={this.props.error} header={this.props.errorHeading} content={this.props.errorContent}/>)
                }
                {
                  this.props.children
                }
            </Form>
        );
    }
};


export default WirdForm;
