/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Modal, Button} from 'semantic-ui-react'

//import css
import './InfoDialog.css'

//import components
import CloseIcon from '../../icons/CloseIcon'

class InfoDialog extends PureComponent{
    constructor(props) {
        super(props)
    }

    render() {
        const { isDialogOpened, onClose, title, infoText } = this.props
        //console.log("I am getting called")
        return (
            <Modal size="mini" open={isDialogOpened} className="info-dialog-container">
                <div className="info-dialog-header-container">
                    <CloseIcon size="tiny" style={{ position: "relative", top: "28px", cursor: "pointer" }} onClick={onClose} />
                    <div className="info-dialog-header-text-container">{title}</div>

                </div>
                <div className="info-dialog-data-container">
                    <div className="info-dialog-success-text">{infoText}</div>
                </div>
                <div className="info-dialog-footer-container">
                    <Button content="OK" primary style={{ width: "115px", height: "40px" }} onClick={onClose} />
                </div>

            </Modal>
        )
    }
}

export default InfoDialog