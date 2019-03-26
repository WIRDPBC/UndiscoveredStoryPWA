/**
 * Created By Nikita Mittal
 * 13th March 2019
 */

import { reducer as formReducer } from 'redux-form';
import GameReducer from './reducer'
export default {
    GameReducer,
    form: formReducer
}