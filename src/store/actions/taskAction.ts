import axios from 'axios';
import { Dispatch } from 'redux';
import { API_URL, TASKS_PATH } from '@/constants/global';
import { TaskActionTypes, TaskAction } from '@/types/task';

export const fetchTasks: any = () => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.START_TASKS })
			const response = await axios.get(`${API_URL}/${TASKS_PATH}`)
			dispatch({
				type: TaskActionTypes.FETCH_TASKS_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.FETCH_TASKS_ERROR,
				payload: 'Error with load data'
			})
		}
	}
}

export const addTask: any = (taskData: any) => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.START_TASKS })
			const response = await axios.post(`${API_URL}/${TASKS_PATH}`, taskData)
			dispatch({
				type: TaskActionTypes.ADD_TASK_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.ADD_TASK_ERROR,
				payload: 'New task wasn`t added'
			})
		}
	}
}

export const deleteTask: any = (id: string) => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.START_TASKS })
			await axios.delete(`${API_URL}/${TASKS_PATH}/${id}`)
			dispatch({
				type: TaskActionTypes.DELETE_TASK_SUCCESS,
				payload: id
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.DELETE_TASK_ERROR,
				payload: 'Task wasn`t deleted'
			})
		}
	}
}

export const editTask: any = (taskData: any) => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.START_TASKS })
			await axios.put(`${API_URL}/${TASKS_PATH}/${taskData.id}`, taskData)
			dispatch({
				type: TaskActionTypes.EDIT_TASK_SUCCESS,
				payload: taskData,
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.EDIT_TASK_ERROR,
				payload: 'Task wasn`t edited'
			})
		}
	}
}
