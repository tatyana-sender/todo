import { TaskState, TaskAction, TaskActionTypes } from '@/types/task';

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS_REQUEST:
      return { ...state, loading: true }
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, loading: false }
    case TaskActionTypes.FETCH_TASKS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TaskActionTypes.ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload], loading: false }
    case TaskActionTypes.ADD_TASK_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TaskActionTypes.DELETE_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload), loading: false }
    case TaskActionTypes.DELETE_TASK_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TaskActionTypes.EDIT_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload.id), action.payload],
        loading: false
      }
    case TaskActionTypes.EDIT_TASK_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}
