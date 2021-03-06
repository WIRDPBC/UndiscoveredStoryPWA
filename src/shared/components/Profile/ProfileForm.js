/**
 * Created By Nikita Mittal
 * 20th March 2019
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Field } from 'redux-form'
import { GridColumn, Grid, Input } from 'semantic-ui-react';
import { reduxForm } from 'redux-form'
import {CopyToClipboard} from 'react-copy-to-clipboard'

//import images
import AvatarImage from '../../icons/AvatarProfile.png'

//import components..
import WirdForm from '../ReduxForm/WirdForm'
import CloseIcon from '../../icons/CloseIcon';
import InputFieldUI from '../ReduxForm/InputField'
import SubmitButton from '../ReduxForm/SubmitButton'
import NavUser from '../../icons/NavUser'



const ProfileForm = (props) => {
    const {onClose, handleSubmit, disabled, invalid, pristine, submitting, initialValues} = props
    const {ReferralLink} = initialValues
    console.log("Profile Obj", props)
    return (
        <Fragment>
            <div className="profile-form-header">
                <div className="profile-form-header-text">Edit Profile</div>
                <div className="profile-form-close-container">
                    <CloseIcon style={{height:"12px", width:"12px"}} onClick={onClose}/>
                </div>
            </div>
            
                <Grid style={{padding: "10px"}}>

                    <Grid.Column width={10} style={{padding:"15px"}}>
                    <WirdForm onSubmit={handleSubmit}>
                        <div className="profile-form-name-container">
                            <div className="profile-form-first-name-container">
                                <div className="profile-form-title-container">First Name</div>
                                {/* <Input type="text" size="small" placeholder="First Name"/> */}
                                <Field component={InputFieldUI} name="firstName" type="text" size="small" placeholder="First Name" style={{paddingRight:"10px"}} />
                            </div>
                            <div className="profile-form-last-name-container">
                                <div className="profile-form-title-container" style={{marginLeft:"10px"}}>Last Name</div>
                                <Field component={InputFieldUI} name="lastName" type="text" size="small" placeholder="Last Name" style={{paddingLeft:"10px"}} required={false} />
                            </div>


                        </div>
                        <div className="profile-form-title-container" style={{marginTop: "20px"}}>Email</div>
                        <Field component={InputFieldUI} name="email" type="email" size="small" placeholder="Email" disabled={true} />
                        <div className="profile-form-title-container" style={{marginTop: "20px"}}>Paypal Email</div>
                        <Field component={InputFieldUI} name="paypalEmail" type="email" size="small" placeholder="Paypal Email" required={false}/>
                        <div className="profile-form-title-container" style={{marginTop: "20px"}}>Referral Link</div>
                        <div className="profile-form-referral-link-container">
                            <div className="profile-form-referral-link">{ReferralLink}</div>
                            <CopyToClipboard text={ReferralLink}>
                                <div style={{cursor:"pointer", color: "#3787d6", fontWeight: "bold"}}>Copy</div>
                            </CopyToClipboard>
                           
                        </div>
                        {/* <Field component={InputFieldUI} name="referralLink" type="string" size="small" placeholder="Referral Link" /> */}
                        <SubmitButton content="Save" style={{float:"right", marginTop:"20px"}} disabled = {invalid|| submitting || pristine}/>
                        </WirdForm>
                    </Grid.Column>
                    <Grid.Column width={6} className="profile-form-user-pic-container">
                        <div className="profile-form-pic-container">
                        <img src={AvatarImage} style={{ width: "103px", height: "103px" }} />
                        {/* <NavUser style={{ width: "103px", height: "103px" }} /> */}
                        </div>
                    </Grid.Column>


                </Grid>


         
        </Fragment>

    )
}

const ProfileReduxForm = reduxForm({
    form: 'userProfileForm'
})(ProfileForm)

export default ProfileReduxForm