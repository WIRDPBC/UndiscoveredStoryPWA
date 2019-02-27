/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react';

//import css
import './SuccessDialog.css'
import CloseIcon from '../../icons/CloseIcon';
import SuccessIcon from '../../icons/SuccessIcon';


class SuccessDialog extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){

        const {isDialogOpened, onClose, title, successText1, successText2, successText3} = this.props
        return (
            <Modal size="mini" open={isDialogOpened} className="success-dialog-container">
                <div className="sucess-dialog-header-container">
                <CloseIcon size="tiny" style={{position:"relative", top: "28px", cursor:"pointer"}} onClick={onClose}/>
                <div className="success-dialog-header-text-container">{title}</div>

                </div>
                <div className="success-dialog-data-container">
                    <SuccessIcon style={{width:"67px", height: "67px", marginTop:"10px"}}/>
                    <div className="success-dialog-success-text">
                        <div>{successText1}</div>
                        <div>{successText2}</div>
                        <div>{successText3}</div>
                    </div>
                </div>
                <div className="sucess-dialog-footer-container">
                    <Button content="Got it" primary style={{width:"115px", height:"40px"}} onClick={onClose}/>
                </div>

            </Modal>
        )
    }
}

export default SuccessDialog