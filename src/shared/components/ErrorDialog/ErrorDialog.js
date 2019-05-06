/**
 * Created By Nikita Mittal
 * 6th May 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Modal, Button} from 'semantic-ui-react'

//import css
import './ErrorDialog.css'

//import components
import CloseIcon from '../../icons/CloseIcon'

class ErrorDialog extends PureComponent{
    constructor(props) {
        super(props)
    }

    render() {
        const { isDialogOpened, onClose, title, errorText } = this.props
        return (
            <Modal size="mini" open={isDialogOpened} className="error-dialog-container">
                <div className="error-dialog-header-container">
                    <CloseIcon size="tiny" style={{ position: "relative", top: "28px", cursor: "pointer" }} onClick={onClose} />
                    <div className="error-dialog-header-text-container">Error</div>

                </div>
                <div className="error-dialog-data-container">
                    <div className="error-dialog-success-text">{errorText}</div>
                </div>
                <div className="error-dialog-footer-container">
                    <Button content="OK" primary style={{ width: "115px", height: "40px" }} onClick={onClose} />
                </div>

            </Modal>
        )
    }
}

export default ErrorDialog