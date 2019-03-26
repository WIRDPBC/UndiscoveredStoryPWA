/**
 * Created By Nikita Mittal
 * 24th March 2019
 * 
 */

export const UPDATE_LOGIN = "onUpdateLogin"

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