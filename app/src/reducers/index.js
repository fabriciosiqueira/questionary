import {combineReducers} from 'redux';
import questionaryReducer from './questionaryReducer';

export default combineReducers({
   questionary: questionaryReducer 
});