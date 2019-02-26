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

        const {isDialogOpened, onClose} = this.props
        return (
            <Modal size="mini" open={isDialogOpened} className="success-dialog-container">
                <div className="sucess-dialog-header-container">
                <CloseIcon size="tiny" style={{position:"relative", top: "28px", cursor:"pointer"}} onClick={onClose}/>
                <div className="success-dialog-header-text-container">Success Message</div>

                </div>
                <div className="success-dialog-data-container">
                    <SuccessIcon style={{width:"67px", height: "67px", marginTop:"10px"}}/>
                    <div className="success-dialog-success-text">Hurray! <br/>
                        Invitation Sent Successfully <br/>
                        You just earned 30 tokens for inviting 10 friends</div>
                </div>
                <div className="sucess-dialog-footer-container">
                    <Button content="Got it" primary style={{width:"115px", height:"40px"}} onClick={onClose}/>
                </div>

            </Modal>
        )
    }
}

export default SuccessDialog