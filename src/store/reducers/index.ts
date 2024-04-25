import { combineReducers } from 'redux';
import { taskReducer } from '@/store/reducers/taskReducer';
import { projectReducer } from '@/store/reducers/projectReducer';
import { modalReducer } from '@/store/reducers/modalReducer';
import { filterReducer } from '@/store/reducers/filterReducer';
import { notificationReducer } from '@/store/reducers/notificationReducer';

export const rootReducer = combineReducers({
    task: taskReducer,
    project: projectReducer,
    modal: modalReducer,
    currentFilter: filterReducer,
    notification: notificationReducer,
})
