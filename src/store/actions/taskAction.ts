import axios from 'axios';
import { Dispatch } from 'redux';
import { TaskActionTypes, TaskAction } from '@/types/task';

export const fetchTasks: any = () => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.START_TASKS })
			const response = await axios.get('http://localhost:3000/tasks')
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
			const response = await axios.post('http://localhost:3000/tasks', taskData)
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
			const response = await axios.delete(`http://localhost:3000/tasks/${id}`)
			dispatch({
				type: TaskActionTypes.DELETE_TASK_SUCCESS,
				payload: id
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.DELETE_TASK_ERROR,
				payload: 'New task wasn`t added'
			})
		}
	}
}

export const editTask: any = (taskData: any) => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.START_TASKS })
			const response = await axios.put(`http://localhost:3000/tasks/${taskData.id}`, taskData)
				console.log(response.data, 'edit');
			dispatch({
				type: TaskActionTypes.EDIT_TASK_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.EDIT_TASK_ERROR,
				payload: 'Task wasn`t edited'
			})
		}
	}
}
