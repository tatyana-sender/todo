import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL, TASKS_PATH } from '@/constants/global';
import { TaskActionTypes, TaskProps, TaskSagaProps } from '@/types/task';
import {
  fetchTasksSuccess,
  fetchTasksFail,
  addTaskFail,
  addTaskSuccess,
  deleteTaskSuccess,
  deleteTaskFail,
  editTaskSuccess,
  editTaskFail
} from '../actions/taskAction';

function* fetchTasksWorker() {
  try {
    const response: Response = yield call(fetch, `${API_URL}/${TASKS_PATH}`);
    const data: TaskProps[] = yield response.json();
    yield put(fetchTasksSuccess(data));
  } catch (error: any ) {
    yield put(fetchTasksFail(error.message));
  }
}

function* addTaskWorker(data: TaskSagaProps) {
  const task = data.payload;
  try {
    yield axios.post(`${API_URL}/${TASKS_PATH}`, {task});
    yield put(addTaskSuccess(task));
  } catch (error: any ) {
    yield put(addTaskFail(error.message));
  }
}

function* deleteTaskWorker(data: TaskSagaProps) {
  const id = String(data.payload);
  try {
    yield axios.delete(`${API_URL}/${TASKS_PATH}/${id}`);
    yield put(deleteTaskSuccess(id));
  } catch (error: any ) {
    yield put(deleteTaskFail(error.message));
  }
}

function* editTaskWorker(data: TaskSagaProps) {
  const id = data.payload.id;
  const task = data.payload;
  try {
    yield axios.put(`${API_URL}/${TASKS_PATH}/${id}`, {task});
    yield put(editTaskSuccess(data.payload));
  } catch (error: any ) {
    yield put(editTaskFail(error.message));
  }
}

export function* tasksWatcher() {
  yield all([
    takeEvery(TaskActionTypes.FETCH_TASKS_REQUEST, fetchTasksWorker),
    takeLatest(TaskActionTypes.ADD_TASK_REQUEST, addTaskWorker),
    takeLatest(TaskActionTypes.DELETE_TASK_REQUEST, deleteTaskWorker),
    takeLatest(TaskActionTypes.EDIT_TASK_REQUEST, editTaskWorker),
  ])
}
