/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import { Modal, Button } from 'semantic-ui-react';

//import css
import './ConfirmDialog.css'

//import components
import CloseIcon from '../../icons/CloseIcon';

class ConfirmDialog extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const { isDialogOpened, onClose, onOpenSuccessDialog, title, confirmText1, confirmText2, confirmText3 } = this.props
        return (
            <Modal size="mini" open={isDialogOpened} className="confirm-dialog-container">
                <div className="confirm-dialog-header-container">
                    <CloseIcon size="tiny" style={{ position: "relative", top: "28px", cursor: "pointer" }} onClick={onClose} />
                    <div className="confirm-dialog-header-text-container">{title}</div>

                </div>
                <div className="confirm-dialog-data-container">
                    <div className="confirm-dialog-success-text">
                        <div>{confirmText1}</div>
                        <div style={{marginTop: "10px"}}>{confirmText2}</div>
                        <div style={{marginTop: "10px"}}>{confirmText3}</div>
                    </div>
                </div>
                <div className="confirm-dialog-footer-container">
                    <Button content="Got it" primary style={{ width: "115px", height: "40px" }} onClick={onOpenSuccessDialog} />
                </div>

            </Modal>
        )
    }
}

export default ConfirmDialog