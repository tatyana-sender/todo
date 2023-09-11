export interface ProjectState {
    projects: any[];
    loading: boolean;
    error: null | string;
}

export enum ProjectActionTypes {
    START_PROJECTS = "START_PROJECTS",
    FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS",
    FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR",
    ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS",
    ADD_PROJECT_ERROR = "ADD_PROJECT_ERROR",
    DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS",
    DELETE_PROJECT_ERROR = "DELETE_PROJECT_ERROR",
    EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS",
    EDIT_PROJECT_ERROR = "EDIT_PROJECT_ERROR"
}

interface startProjectAction {
    type: ProjectActionTypes.START_PROJECTS;
}

interface fetchProjectSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS;
    payload: any[];
}

interface fetchProjectErrorAction {
    type: ProjectActionTypes.FETCH_PROJECTS_ERROR;
    payload: string;
}

interface addProjectActionSuccess {
    type: ProjectActionTypes.ADD_PROJECT_SUCCESS;
    payload: any[];
}

interface addProjectActionError {
    type: ProjectActionTypes.ADD_PROJECT_ERROR;
    payload: string;
}

interface deleteProjectActionSuccess {
    type: ProjectActionTypes.DELETE_PROJECT_SUCCESS;
    payload: string;
}

interface deleteProjectActionError {
    type: ProjectActionTypes.DELETE_PROJECT_ERROR;
    payload: string;
}

interface editProjectActionSuccess {
    type: ProjectActionTypes.EDIT_PROJECT_SUCCESS;
    payload: any;
}

interface editProjectActionError {
    type: ProjectActionTypes.EDIT_PROJECT_ERROR;
    payload: string;
}

export type ProjectAction = startProjectAction | fetchProjectSuccessAction | fetchProjectErrorAction |
  addProjectActionSuccess | addProjectActionError | deleteProjectActionSuccess | deleteProjectActionError |
  editProjectActionSuccess | editProjectActionError;
