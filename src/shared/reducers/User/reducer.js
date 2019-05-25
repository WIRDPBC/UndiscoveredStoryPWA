/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import{
    UPDATE_LOGIN,
    CLEAR_LOGIN,
    IS_ACCESS_TOKEN_VALID
} from './actions'

const UserReducer = (state, action) => {
    switch(action.type){
        case UPDATE_LOGIN:{
            const {login} = action.payload
            state = {
                ...state,
                login:{
                    ...login
                },
                isAccessTokenValid: true,
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
        case IS_ACCESS_TOKEN_VALID:{
            const {isValid} = action.payload
            state = {
                ...state,
                isAccessTokenValid: isValid
            }
            break;
        }
    }

    return state
}


export default UserReducer