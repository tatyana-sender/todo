import axios from 'axios';
import { Dispatch } from 'redux';
import { TaskActionTypes, TaskAction } from '@/types/task';

export const fetchTasks: any = () => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.FETCH_TASKS })
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

export const addTask: any = () => {
	return async (dispatch: Dispatch<TaskAction>) => {
		try {
			dispatch({ type: TaskActionTypes.FETCH_TASKS })
			const response = await axios.post('http://localhost:3000/tasks')
			dispatch({
				type: TaskActionTypes.FETCH_TASKS_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: TaskActionTypes.FETCH_TASKS_ERROR,
				payload: 'New task wasn`t added'
			})
		}
	}
}