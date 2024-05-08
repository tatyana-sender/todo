export interface TaskState {
    tasks: any[];
    loading: boolean;
    error: null | string;
}

export enum TaskActionTypes {
    START_TASKS = "START_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
    ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS",
    ADD_TASK_ERROR = "ADD_TASK_ERROR",
    DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
    DELETE_TASK_ERROR = "DELETE_TASK_ERROR",
    EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS",
    EDIT_TASK_ERROR = "EDIT_TASK_ERROR"
}

interface startTaskAction {
    type: TaskActionTypes.START_TASKS;
}

interface fetchTaskSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS;
    payload: any[];
}

interface fetchTaskErrorAction {
    type: TaskActionTypes.FETCH_TASKS_ERROR;
    payload: string;
}

interface addTaskActionSuccess {
    type: TaskActionTypes.ADD_TASK_SUCCESS;
    payload: any[];
}

interface addTaskActionError {
    type: TaskActionTypes.ADD_TASK_ERROR;
    payload: string;
}

interface deleteTaskActionSuccess {
    type: TaskActionTypes.DELETE_TASK_SUCCESS;
    payload: string;
}

interface deleteTaskActionError {
    type: TaskActionTypes.DELETE_TASK_ERROR;
    payload: string;
}

interface editTaskActionSuccess {
    type: TaskActionTypes.EDIT_TASK_SUCCESS;
    payload: any;
}

interface editTaskActionError {
    type: TaskActionTypes.EDIT_TASK_ERROR;
    payload: string;
}

export type TaskAction = startTaskAction | fetchTaskSuccessAction | fetchTaskErrorAction | addTaskActionSuccess |
  addTaskActionError | deleteTaskActionSuccess | deleteTaskActionError | editTaskActionSuccess | editTaskActionError;
