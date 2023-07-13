export interface taskState {
    tasks: any[];
    loading: boolean;
    error: null | string;
}

export enum TaskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR"
}

interface fetchTaskAction {
    type: TaskActionTypes.FETCH_TASKS;
}

interface fetchTaskSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS;
    payload: any[];
}

interface fetchTaskErrorAction {
    type: TaskActionTypes.FETCH_TASKS_ERROR;
    payload: string;
}

export type TaskAction = fetchTaskAction | fetchTaskSuccessAction | fetchTaskErrorAction;
