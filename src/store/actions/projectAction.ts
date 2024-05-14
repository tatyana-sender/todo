import {
	addProjectActionError,
	addProjectActionRequest,
	addProjectActionSuccess,
	deleteProjectActionError,
	deleteProjectActionRequest,
	deleteProjectActionSuccess,
	editProjectActionError,
	editProjectActionRequest,
	editProjectActionSuccess,
	fetchProjectErrorAction,
	fetchProjectRequestAction,
	fetchProjectSuccessAction,
	ProjectActionTypes,
	ProjectProps,
} from '@/types/project';

export const fetchProjectsRequest = (): fetchProjectRequestAction => ({
	type: ProjectActionTypes.FETCH_PROJECTS_REQUEST,
})


export const fetchProjectsSuccess = (payload: ProjectProps[]): fetchProjectSuccessAction => ({
	type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
	payload
})

export const fetchProjectsFail = (payload: string): fetchProjectErrorAction => ({
	type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
	payload
})

export const addProject = (project: ProjectProps): addProjectActionRequest => ({
	type: ProjectActionTypes.ADD_PROJECT_REQUEST,
	payload: project
})

export const addProjectSuccess = (payload: ProjectProps): addProjectActionSuccess => ({
	type: ProjectActionTypes.ADD_PROJECT_SUCCESS,
	payload
})

export const addProjectFail = (payload: string): addProjectActionError => ({
	type: ProjectActionTypes.ADD_PROJECT_ERROR,
	payload
})

export const deleteProject = (payload: string): deleteProjectActionRequest => ({
	type: ProjectActionTypes.DELETE_PROJECT_REQUEST,
	payload
})

export const deleteProjectSuccess = (payload: string): deleteProjectActionSuccess => ({
	type: ProjectActionTypes.DELETE_PROJECT_SUCCESS,
	payload
})

export const deleteProjectFail = (payload: string): deleteProjectActionError => ({
	type: ProjectActionTypes.DELETE_PROJECT_ERROR,
	payload
})

export const editProject = (payload: ProjectProps): editProjectActionRequest => ({
	type: ProjectActionTypes.EDIT_PROJECT_REQUEST,
	payload
})

export const editProjectSuccess = (payload: ProjectProps): editProjectActionSuccess => ({
	type: ProjectActionTypes.EDIT_PROJECT_SUCCESS,
	payload
})

export const editProjectFail = (payload: string): editProjectActionError => ({
	type: ProjectActionTypes.EDIT_PROJECT_ERROR,
	payload
})
