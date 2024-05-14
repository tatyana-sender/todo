export interface ProjectState {
  projects: any[];
  loading: boolean;
  error: null | string;
}

export enum ProjectActionTypes {
  FETCH_PROJECTS_REQUEST = "FETCH_PROJECTS_REQUEST",
  FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS",
  FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR",
  ADD_PROJECT_REQUEST = "ADD_PROJECT_REQUEST",
  ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS",
  ADD_PROJECT_ERROR = "ADD_PROJECT_ERROR",
  DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST",
  DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS",
  DELETE_PROJECT_ERROR = "DELETE_PROJECT_ERROR",
  EDIT_PROJECT_REQUEST = "EDIT_PROJECT_REQUEST",
  EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS",
  EDIT_PROJECT_ERROR = "EDIT_PROJECT_ERROR"
}

export interface fetchProjectRequestAction {
  type: ProjectActionTypes.FETCH_PROJECTS_REQUEST;
}

export interface fetchProjectSuccessAction {
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS;
  payload: ProjectProps[];
}

export interface fetchProjectErrorAction {
  type: ProjectActionTypes.FETCH_PROJECTS_ERROR;
  payload: string;
}

export interface addProjectActionRequest {
  type: ProjectActionTypes.ADD_PROJECT_REQUEST;
  payload: ProjectProps;
}

export interface addProjectActionSuccess {
  type: ProjectActionTypes.ADD_PROJECT_SUCCESS;
  payload: ProjectProps;
}

export interface addProjectActionError {
  type: ProjectActionTypes.ADD_PROJECT_ERROR;
  payload: string;
}

export interface deleteProjectActionRequest {
  type: ProjectActionTypes.DELETE_PROJECT_REQUEST;
  payload: string;
}

export interface deleteProjectActionSuccess {
  type: ProjectActionTypes.DELETE_PROJECT_SUCCESS;
  payload: string;
}

export interface deleteProjectActionError {
  type: ProjectActionTypes.DELETE_PROJECT_ERROR;
  payload: string;
}

export interface editProjectActionRequest {
  type: ProjectActionTypes.EDIT_PROJECT_REQUEST;
  payload: ProjectProps;
}

export interface editProjectActionSuccess {
  type: ProjectActionTypes.EDIT_PROJECT_SUCCESS;
  payload: ProjectProps;
}

export interface editProjectActionError {
  type: ProjectActionTypes.EDIT_PROJECT_ERROR;
  payload: string;
}

export type ProjectAction = fetchProjectRequestAction | fetchProjectSuccessAction | fetchProjectErrorAction |
  addProjectActionRequest | addProjectActionSuccess | addProjectActionError |
  deleteProjectActionRequest | deleteProjectActionSuccess | deleteProjectActionError |
  editProjectActionRequest | editProjectActionSuccess | editProjectActionError;

export interface ProjectSagaProps {
    type: string
    payload: ProjectProps
}

export interface ProjectProps {
    title: string,
    tasks: string[],
    id: string,
    description: string,
    createDate?: Date,
    deadline: Date,
}
