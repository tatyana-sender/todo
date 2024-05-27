import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from '@/store/reducers/taskReducer';
import projectReducer from '@/store/reducers/projectReducer';
import modalReducer from '@/store/reducers/modalReducer';
import filterReducer from '@/store/reducers/filterReducer';
import notificationReducer from '@/store/reducers/notificationReducer';
import notificationWSReducer from '@/store/reducers/notificationWSReducer';

export const rootReducer = combineReducers({
  task: taskReducer,
  project: projectReducer,
  modal: modalReducer,
  currentFilter: filterReducer,
  notification: notificationReducer,
  notificationWS: notificationWSReducer,
})