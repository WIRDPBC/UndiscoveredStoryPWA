/**
 * Created By Nikita Mittal
 * 3rd April 2019
 */

import {STORE_QUESTIONS} from './action'


const QuestionReducer = (state, action) => {
    switch(action.type){
        case STORE_QUESTIONS:{
            const {questionData} = action.payload
            state = {
                ...state,
                questionData:[...questionData]
            }
            break
        }
    }
    return state
}

export default QuestionReducer