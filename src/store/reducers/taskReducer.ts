
import { TaskState, TaskAction, TaskActionTypes } from '@/types/task';

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS:
      return { ...state, loading: true }
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, loading: false }
    case TaskActionTypes.FETCH_TASKS_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}

export const addTaskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS:
      return { ...state, loading: true, error: null }
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, loading: false }
    case TaskActionTypes.FETCH_TASKS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}
  
export const deleteTaskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS:
      return { ...state, loading: true, error: null }
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload], loading: false }
    case TaskActionTypes.FETCH_TASKS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}
