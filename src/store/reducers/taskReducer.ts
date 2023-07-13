
import { taskState, TaskAction, TaskActionTypes } from '@/types/task';

const initialState: taskState = {
    tasks: [],
    loading: false,
    error: null
}

export const taskReducer = (state = initialState, action: TaskAction): taskState => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            return { tasks: [], loading: true, error: null }
        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return { tasks: action.payload, loading: false, error: null }
        case TaskActionTypes.FETCH_TASKS_ERROR:
            return { tasks: [], loading: false, error: action.payload }
        default:
            return state;
    }
}
