/**
 * Created By Nikita Mittal
 * 7th April 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {hostUrl} from '../helper'
import { withRouter } from 'react-router-dom'
import { Container, Icon, Input } from 'semantic-ui-react'
import {connect} from 'react-redux'
import map from 'lodash/map'

//import actions
import {loadAdvertisingCommentData, addComment} from '../../reducers/AdvertisingOpt/action'

//import css
import './AdvertisingComment.css'

//import components
import TopHeaderBack from '../TopHeaderBack'
import AdvertisingCommentData from './AdvertisingCommentData'
import CustomScrollbar from '../CustomScrollbar';

class AdvertisingComment extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            commentText : ""
        }
    }

    componentWillMount(){
        const {location, loadAdvertisingCommentData} = this.props
        const {advertisingId} = location
        let url = `${hostUrl}/getAllComments`
        const formData = {
            advertisementType: advertisingId
        }
        const config = {
            headers: { 
                'content-type': 'application/json',
             },
        }
       // console.log("Advertising Comment Form Data", formData)
        axios.post(url, formData, config)
        .then(commentData => {
         //   console.log("Comments", commentData.data.data)
            loadAdvertisingCommentData(commentData.data.data, advertisingId)
        })
        .catch(error => {
            console.error(error)
        })
    }
    getCommentList = () => {
        const {commentList} = this.props
       // console.log("Comment List", commentList)
        if(commentList && commentList.length){
            return map(commentList, (comment, index) => {
                return <AdvertisingCommentData key={index} commentData={comment}/>
            })
        }
      
    }

    onChangeInputValue = (event, data) => {
        if(data && data.value){
           // console.log("On Comment ", data.value)
            this.setState({
                commentText : data.value
            })
        }
      
    }

    onSendComment = (e) => {
        const {location, addComment, email} = this.props
        const { advertisingId } = location
        const {commentText} = this.state
        if(e.key === 'Enter'){
            console.log("On Comment Data", commentText)
            if(commentText){
                let commentData = commentText
                setTimeout(() => {
                    this.setState({
                        commentText : ""
                    })
                })
                addComment(commentData, advertisingId)
                setTimeout(() => {
                    let url = `${hostUrl}/addCommentAdvertisement`
                    const formData = {
                        advertisementType: advertisingId,
                        comment: commentData,
                        email: email
                    }
                    const config = {
                        headers: { 
                            'content-type': 'application/json',
                         },
                    }
                    axios.post(url, formData, config)
                    .then((data) => {
                        console.log("Comment data Added Successfully", data)
                    })
                    .catch(error => {
                        console.error("Error in adding comment", error)
                    })
                })
            
            }
        }
       
   
    }
    render() {
        const { location, commentList } = this.props
        const { title, image, advertisingId } = location
        const { commentText } = this.state
     //   console.log("Advertising Comment", this.props)
        return (
            <div className="advertising-comment-parent-container">
                <TopHeaderBack title="Comment" />
                <div className="advertising-comment-container">
                    <Container style={{paddingTop:"65.5px"}}>
                        <div className="advertsing-comment-header-container">
                            <img src={image} className="advertising-comment-image-container"/>
                            <div className="advertsing-comment-text-container">{title}</div>
                        </div>
                        <div className="advertising-comment-data-container">
                            <CustomScrollbar>
                        
                                {this.getCommentList()}
                        
                            </CustomScrollbar>
                        </div>
                      
                        
                        <div className="advertising-comment-input-container">
                            <Input fluid icon={<Icon name="send" onClick={this.onSendComment}/>} placeholder="Type your comment here" onChange={this.onChangeInputValue} onKeyPress={this.onSendComment} value={commentText}/>
                        </div>

                    </Container>


                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const {location} = props
    const { title, image, advertisingId} = location
    const gameData = state.GameReducer
    const login = gameData.login
    let email
    if(login){
        email = login.email
    }
    let commentList = gameData.advertisingOpt[advertisingId] && gameData.advertisingOpt[advertisingId].commentList && gameData.advertisingOpt[advertisingId].commentList.length ? gameData.advertisingOpt[advertisingId].commentList : []
    return {
        commentList,
        email
    }
}


const mapActionsToProps = {
    loadAdvertisingCommentData,
    addComment
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(AdvertisingComment))
