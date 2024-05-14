export interface TaskState {
  tasks: any[];
  loading: boolean;
  error: null | string;
}

export enum TaskActionTypes {
  FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
  ADD_TASK_REQUEST = "ADD_TASK_REQUEST",
  ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS",
  ADD_TASK_ERROR = "ADD_TASK_ERROR",
  DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST",
  DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
  DELETE_TASK_ERROR = "DELETE_TASK_ERROR",
  EDIT_TASK_REQUEST = "EDIT_TASK_REQUEST",
  EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS",
  EDIT_TASK_ERROR = "EDIT_TASK_ERROR"
}

export interface fetchTaskRequestAction {
  type: TaskActionTypes.FETCH_TASKS_REQUEST;
}

export interface fetchTaskSuccessAction {
  type: TaskActionTypes.FETCH_TASKS_SUCCESS;
  payload: TaskProps[];
}

export interface fetchTaskErrorAction {
  type: TaskActionTypes.FETCH_TASKS_ERROR;
  payload: string;
}

export interface addTaskActionRequest {
  type: TaskActionTypes.ADD_TASK_REQUEST;
  payload: TaskProps;
}

export interface addTaskActionSuccess {
  type: TaskActionTypes.ADD_TASK_SUCCESS;
  payload: TaskProps;
}

export interface addTaskActionError {
  type: TaskActionTypes.ADD_TASK_ERROR;
  payload: string;
}

export interface deleteTaskActionRequest {
  type: TaskActionTypes.DELETE_TASK_REQUEST;
  payload: string;
}

export interface deleteTaskActionSuccess {
  type: TaskActionTypes.DELETE_TASK_SUCCESS;
  payload: string;
}

export interface deleteTaskActionError {
  type: TaskActionTypes.DELETE_TASK_ERROR;
  payload: string;
}

export interface editTaskActionRequest {
  type: TaskActionTypes.EDIT_TASK_REQUEST;
  payload: TaskProps;
}

export interface editTaskActionSuccess {
  type: TaskActionTypes.EDIT_TASK_SUCCESS;
  payload: TaskProps;
}

export interface editTaskActionError {
  type: TaskActionTypes.EDIT_TASK_ERROR;
  payload: string;
}

export type TaskAction = fetchTaskRequestAction | fetchTaskSuccessAction | fetchTaskErrorAction |
  addTaskActionRequest | addTaskActionSuccess | addTaskActionError |
  deleteTaskActionSuccess | deleteTaskActionError | editTaskActionSuccess | editTaskActionError;

export interface TaskSagaProps {
  type: string
  payload: TaskProps
}

export interface TaskProps {
  title: string,
  status?: string,
  id: string,
  description: string,
  createDate?: Date,
  deadline: Date,
  project: string
}
