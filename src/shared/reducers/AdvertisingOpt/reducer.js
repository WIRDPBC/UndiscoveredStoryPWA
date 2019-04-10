/**
 * Created By Nikita Mittal
 * 7th Apr 2019
 */

import {
    STORE_ADVERTISING_OPT,
    STORE_ADVERTISING_COMMENT_DATA,
    ADD_COMMENT
} from './action'

const AdvertisingOptReducer = (state, action) => {
    switch(action.type){
        case STORE_ADVERTISING_OPT:{
            const {advertisingOptList, advertisingOptById} = action.payload
            state = {
                ...state,
                advertisingOptData: [...advertisingOptList],
                advertisingOpt:{...advertisingOptById}
            }
            break
        }
        case STORE_ADVERTISING_COMMENT_DATA:{
            const {commentList, advertisingType} = action.payload
            state = {
                ...state,
                advertisingOpt:{
                        ...state.advertisingOpt,
                        [advertisingType]:{
                            ...state.advertisingOpt[advertisingType],
                            commentList : [...commentList]
                        }
                    }
                }
                // commentList : [...commentList]
            break
        }
        case ADD_COMMENT:{
            const {comment, type} = action.payload
            state = {
                ...state ,
                advertisingOpt:{
                        ...state.advertisingOpt,
                        [type]:{
                            ...state.advertisingOpt[type],
                            commentList : [...state.advertisingOpt[type].commentList, comment]
                        }
                    }
                }
            break
        }
    }

    return state
}


export default AdvertisingOptReducer
