/**
 * Created By Nikita Mittal
 * 24th March 2019
 * 
 */

export const UPDATE_LOGIN = "onUpdateLogin"
export const CLEAR_LOGIN = "clearLogin"
export const IS_ACCESS_TOKEN_VALID = "isAccessTokenValid"

import {USER} from '../model'
const model = USER

export const onUpdateLoginAction = (login) => {
    return (dispatch, getState) => {
        dispatch({
            type : UPDATE_LOGIN,
            model,
            payload:{
                login
            }
        })
    }
}

export const onLogout = () => {
    return (dispatch, getState) => {
        dispatch({
            type : CLEAR_LOGIN,
            model,
            payload: null
        })
    }
}


export const isAccessTokenValidAction = (isValid) => {
    return (dispatch, getState) => {
        dispatch({
            type: IS_ACCESS_TOKEN_VALID,
            model,
            payload: isValid
        })
    }
}