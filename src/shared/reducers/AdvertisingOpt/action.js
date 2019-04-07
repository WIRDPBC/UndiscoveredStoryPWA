
export const STORE_ADVERTISING_OPT = "store_advertising_opt"
import {ADVERTISINGOPT} from '../model'
let model = ADVERTISINGOPT


export const storeLoadAdvertisingList = (advertisingOptList) => {
    return (dispatch, getState) => {
       dispatch({
           type: STORE_ADVERTISING_OPT,
           model,
           payload:{
               advertisingOptList
           }
       })
    }
}