/**
 * Created By Nikita Mittal
 * 7th Apr 2019
 */

import {STORE_ADVERTISING_OPT} from './action'

const AdvertisingOptReducer = (state, action) => {
    switch(action.type){
        case STORE_ADVERTISING_OPT:{
            const {advertisingOptList} = action.payload
            state = {
                ...state,
                advertisingOptData: [...advertisingOptList]
            }
            break
        }
    }

    return state
}


export default AdvertisingOptReducer
