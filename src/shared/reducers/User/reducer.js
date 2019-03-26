/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import{
    UPDATE_LOGIN
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
    }

    return state
}


export default UserReducer