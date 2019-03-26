/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import initialState from './initialState'
import {USER} from './model'

import UserReducer from './User/reducer'

const GameReducer  = (state = initialState, action) => {
    switch(action.model){
        case USER:{
            state = UserReducer(state, action)
            break
        }
    }
    return state
}

export default GameReducer