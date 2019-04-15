/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import{
    UPDATE_LOGIN,
    CLEAR_LOGIN
} from './actions'

const UserReducer = (state, action) => {
    switch(action.type){
        case UPDATE_LOGIN:{
            const {login} = action.payload
            state = {
                ...state,
                login:{
                    ...login
                }
            }
            break
        }
        case CLEAR_LOGIN:{
            state = {
                ...state,
                login: null
            }
            break;
        }
    }

    return state
}


export default UserReducer