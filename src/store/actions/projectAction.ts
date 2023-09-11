import axios from 'axios';
import { Dispatch } from 'redux';
import { ProjectActionTypes, ProjectAction } from '@/types/project';

export const fetchProjects: any = () => {
	return async (dispatch: Dispatch<ProjectAction>) => {
		try {
			dispatch({ type: ProjectActionTypes.START_PROJECTS })
			const response = await axios.get('http://localhost:3000/projects')
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
				payload: 'Error with load data'
			})
		}
	}
}

export const addProject: any = (projectData: any) => {
	return async (dispatch: Dispatch<ProjectAction>) => {
		try {
			dispatch({ type: ProjectActionTypes.START_PROJECTS })
			const response = await axios.post('http://localhost:3000/projects', projectData)
			dispatch({
				type: ProjectActionTypes.ADD_PROJECT_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: ProjectActionTypes.ADD_PROJECT_ERROR,
				payload: 'New project wasn`t added'
			})
		}
	}
}

export const deleteProject: any = (id: string) => {
	return async (dispatch: Dispatch<ProjectAction>) => {
		try {
			dispatch({ type: ProjectActionTypes.START_PROJECTS })
			const response = await axios.delete(`http://localhost:3000/projects/${id}`)
			dispatch({
				type: ProjectActionTypes.DELETE_PROJECT_SUCCESS,
				payload: id
			})
		} catch (e) {
			dispatch({
				type: ProjectActionTypes.DELETE_PROJECT_ERROR,
				payload: 'Project wasn`t deleted'
			})
		}
	}
}

export const editProject: any = (projectData: any) => {
	return async (dispatch: Dispatch<ProjectAction>) => {
		try {
			dispatch({ type: ProjectActionTypes.START_PROJECTS })
			const response = await axios.put(`http://localhost:3000/projects/${projectData.id}`, projectData)
				console.log(response.data, 'edit');
			dispatch({
				type: ProjectActionTypes.EDIT_PROJECT_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: ProjectActionTypes.EDIT_PROJECT_ERROR,
				payload: 'Project wasn`t edited'
			})
		}
	}
}
