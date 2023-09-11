import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';
import { projectReducer } from './projectReducer';
import modalReducer from './modalReducer';
import filterReducer from '@/store/reducers/filterReducer';

export const rootReducer = combineReducers({
    task: taskReducer,
    project: projectReducer,
    modal: modalReducer,
    currentFilter: filterReducer
})
