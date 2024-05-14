import {
	addTaskActionSuccess,
	addTaskActionError,
	addTaskActionRequest,
	deleteTaskActionRequest,
	deleteTaskActionError,
	deleteTaskActionSuccess,
	editTaskActionRequest,
	editTaskActionSuccess,
	editTaskActionError,
	fetchTaskErrorAction,
	fetchTaskSuccessAction,
	fetchTaskRequestAction,
	TaskActionTypes,
	TaskProps,
} from '@/types/task';

export const fetchTasksRequest = (): fetchTaskRequestAction => ({
	type: TaskActionTypes.FETCH_TASKS_REQUEST,
})


export const fetchTasksSuccess = (payload: TaskProps[]): fetchTaskSuccessAction => ({
	type: TaskActionTypes.FETCH_TASKS_SUCCESS,
	payload
})

export const fetchTasksFail = (payload: string): fetchTaskErrorAction => ({
	type: TaskActionTypes.FETCH_TASKS_ERROR,
	payload
})

export const addTask = (task: TaskProps): addTaskActionRequest => ({
	type: TaskActionTypes.ADD_TASK_REQUEST,
	payload: task
})

export const addTaskSuccess = (payload: TaskProps): addTaskActionSuccess => ({
	type: TaskActionTypes.ADD_TASK_SUCCESS,
	payload
})

export const addTaskFail = (payload: string): addTaskActionError => ({
	type: TaskActionTypes.ADD_TASK_ERROR,
	payload
})

export const deleteTask = (payload: string): deleteTaskActionRequest => ({
	type: TaskActionTypes.DELETE_TASK_REQUEST,
	payload
})

export const deleteTaskSuccess = (payload: string): deleteTaskActionSuccess => ({
	type: TaskActionTypes.DELETE_TASK_SUCCESS,
	payload
})

export const deleteTaskFail = (payload: string): deleteTaskActionError => ({
	type: TaskActionTypes.DELETE_TASK_ERROR,
	payload
})

export const editTask = (payload: TaskProps): editTaskActionRequest => ({
	type: TaskActionTypes.EDIT_TASK_REQUEST,
	payload
})

export const editTaskSuccess = (payload: TaskProps): editTaskActionSuccess => ({
	type: TaskActionTypes.EDIT_TASK_SUCCESS,
	payload
})

export const editTaskFail = (payload: string): editTaskActionError => ({
	type: TaskActionTypes.EDIT_TASK_ERROR,
	payload
})
