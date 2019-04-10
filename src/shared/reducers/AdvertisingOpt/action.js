
export const STORE_ADVERTISING_OPT = "store_advertising_opt"
export const STORE_ADVERTISING_COMMENT_DATA = "store_advertising_comment_data"
export const ADD_COMMENT = "add_comment"
import {ADVERTISINGOPT} from '../model'
let model = ADVERTISINGOPT


export const storeLoadAdvertisingList = (advertisingOptList) => {
    return (dispatch, getState) => {
        let state = getState()
        let gameData = state.GameReducer
        let advertisingOptById = gameData.advertisingOpt
        if(advertisingOptList && advertisingOptList.length){
            advertisingOptList.forEach(advertisingOpt => {
                if(advertisingOpt){
                    advertisingOptById[advertisingOpt.advertisementType]={
                        ...advertisingOpt
                    }
                }
            })
        }
        // advertisingOptList.forEach(advertisingOpt, )
       dispatch({
           type: STORE_ADVERTISING_OPT,
           model,
           payload:{
               advertisingOptList,
               advertisingOptById
           }
       })
    }
}


export const loadAdvertisingCommentData = (commentList, advertisingType) => {
    return (dispatch, getState) => {
        const state = getState()
        const gameData = state.GameReducer
        // let advertisingOpt = gameData.advertisingOpt[advertisingType]
        // advertisingOpt.commentList = [...commentList]
        dispatch({
            type: STORE_ADVERTISING_COMMENT_DATA,
            model,
            payload: {
                advertisingType,
                commentList,
            }
        })
    }
}


export const addComment = (commentData, type) => {
    return (dispatch, getState) => {
        let state = getState()
        let gameData = state.GameReducer
        let loginData = gameData.login
        if(loginData){
            let firstName = loginData.firstName
            let email = loginData.commentedBy_Email
            let comment = {
                advertisementType : type,
                comment : commentData,
                firstName: firstName,
                commentedBy_Email: email
            }
            dispatch({
                type: ADD_COMMENT,
                model,
                payload: {
                    comment,
                    type
                }
            })
        }
        
    }
}