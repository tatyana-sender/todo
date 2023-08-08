import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';
import modalReducer from './modalReducer';
import filterReducer from '@/store/reducers/filterReducer';

export const rootReducer = combineReducers({
    task: taskReducer,
    modal: modalReducer,
    currentFilter: filterReducer
})
