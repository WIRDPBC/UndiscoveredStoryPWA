/**
 * Created By Nikita Mittal
 * 7th April 2019
 */

import React from 'react'
import PropTypes from 'prop-types';


const AdvertisingCommentData = (props) => {
    const {commentData} = props
    const getName = () => {
        let name 
        if(commentData){
            if(commentData.firstName){
                name = commentData.firstName
            } else if(commentData.commentedBy_Email){
                name = commentData.commentedBy_Email
            }
        }
        return name
    }
    return (
        <div className="advertising-comment-data-element-container">
            <div className="advertising-comment-username-container">{getName()}</div>
            <div className="advertising-comment-comment-data-container">{commentData.comment}</div>
        </div>
    )
}


export default AdvertisingCommentData