/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import initialState from './initialState'
import {
    USER,
    QUESTION,
    ADVERTISINGOPT
} from './model'

import UserReducer from './User/reducer'
import QuestionReducer from './Questions/reducer'
import AdvertisingOptReducer from './AdvertisingOpt/reducer'

const GameReducer  = (state = initialState, action) => {
    switch(action.model){
        case USER:{
            state = UserReducer(state, action)
            break
        }
        case QUESTION:{
            state = QuestionReducer(state, action)
            break
        }

        case ADVERTISINGOPT:{
            state = AdvertisingOptReducer(state, action)
            break
        }
    }
    return state
}

export default GameReducer