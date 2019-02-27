/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Grid, GridColumn } from 'semantic-ui-react'

//import css
import './InviteContacts.css'

//import components
import TopHeaderClose from '../TopHeaderClose'
import InviteContactsItem from './InviteContactsItem'
import InviteContactsEmpty from './InviteContactsEmpty';
import SuccessDialog from '../SucessDialog';


import WhatsappIcon from '../../icons/WhatsappIcon.png'
import FacebookIcon from '../../icons/FacebookIcon.png'
import TwitterIcon from '../../icons/TwitterIcon.png'
import TelegramIcon from '../../icons/TelegramIcon.png'
import GoogleIcon from '../../icons/GoogleIcon.png'
import InstagramIcon from '../../icons/InstagramIcon.png'
import SkypeIcon from '../../icons/SkypeIcon.png'
import MessangerIcon from '../../icons/MessengerIcon.png'



class InviteContacts extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isDialogOpened: false
        }
    }

    onOpenDialog = () => {
        this.setState({
            isDialogOpened: true
        })
    }

    onCloseDialog = () => {
        this.setState({
            isDialogOpened: false
        })
    }

    render() {
        const { isDialogOpened } = this.state

        return (
            <Fragment>
                <TopHeaderClose title="Invite Contacts" />
                <div className="invite-contact-container">
                    <Grid doubling columns={5} >
                        <GridColumn>
                            <InviteContactsItem onClick={this.onOpenDialog} image={WhatsappIcon} name="Whatsapp" />
                            </GridColumn>
                            <GridColumn>
                            <InviteContactsItem onClick={this.onOpenDialog} image={FacebookIcon} name="Facebook" />
                            </GridColumn>
                            <GridColumn>
                            <InviteContactsItem onClick={this.onOpenDialog} image={TwitterIcon} name="Twitter" />
                            </GridColumn>
                           <GridColumn>
                           <InviteContactsItem onClick={this.onOpenDialog} image={TelegramIcon} name="Telegram" />
                           </GridColumn>
                           <GridColumn>
                           <InviteContactsItem onClick={this.onOpenDialog} image={GoogleIcon} name="Google" />
                           </GridColumn>
                           <GridColumn>
                           <InviteContactsItem onClick={this.onOpenDialog} image={InstagramIcon} name="Instagram" />
                           </GridColumn>
                            <GridColumn>
                            <InviteContactsItem onClick={this.onOpenDialog} image={SkypeIcon} name="Skype" />
                            </GridColumn>
                            <GridColumn>
                            <InviteContactsItem onClick={this.onOpenDialog} image={MessangerIcon} name="Messenger" />
                            </GridColumn>
                            <GridColumn>
                            <InviteContactsEmpty />
                            </GridColumn>
                            <GridColumn>
                            <InviteContactsEmpty />
                            </GridColumn>
                           
                          
                         
                       
                      

                    </Grid>
                </div>
                <SuccessDialog 
                isDialogOpened={isDialogOpened} 
                onClose={this.onCloseDialog} 
                title="Success Message" 
                successText1="Hurray!" 
                successText2="Invitation Sent Successfully" 
                successText3="You just earned 30 tokens for inviting 10 friends" />
            </Fragment>
        )
    }
}

export default InviteContacts