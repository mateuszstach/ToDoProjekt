import {tasksReducer} from './taskReducer';
import {combineReducers} from 'redux';

const appReducers = combineReducers({tasksReducer});

export default appReducers;
