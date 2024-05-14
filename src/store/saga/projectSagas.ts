import axios from 'axios';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { API_URL, PROJECTS_PATH } from '@/constants/global';
import {ProjectActionTypes, ProjectProps, ProjectSagaProps} from '@/types/project';
import {
  addProjectFail,
  addProjectSuccess,
  deleteProjectSuccess,
  deleteProjectFail,
  editProjectSuccess,
  editProjectFail,
  fetchProjectsSuccess,
  fetchProjectsFail,
} from '../actions/projectAction';

function* fetchProjectsWorker() {
  try {
    const response: Response = yield call(fetch, `${API_URL}/${PROJECTS_PATH}`);
    const data: ProjectProps[] = yield response.json();
    yield put(fetchProjectsSuccess(data));
  } catch (error: any ) {
    yield put(fetchProjectsFail(error.message));
  }
}

function* addProjectWorker(data: ProjectSagaProps) {
  const project = data.payload;
  try {
    yield axios.post(`${API_URL}/${PROJECTS_PATH}`, {project});
    yield put(addProjectSuccess(project));
  } catch (error: any ) {
    yield put(addProjectFail(error.message));
  }
}

function* deleteProjectWorker(data: ProjectSagaProps) {
  const id = String(data.payload);
  try {
    yield axios.delete(`${API_URL}/${PROJECTS_PATH}/${id}`);
    yield put(deleteProjectSuccess(id));
  } catch (error: any ) {
    yield put(deleteProjectFail(error.message));
  }
}

function* editProjectWorker(data: ProjectSagaProps) {
  const id = data.payload.id;
  const project = data.payload;
  try {
    yield axios.put(`${API_URL}/${PROJECTS_PATH}/${id}`, {project});
    yield put(editProjectSuccess(data.payload));
  } catch (error: any ) {
    yield put(editProjectFail(error.message));
  }
}

export function* projectsWatcher() {
  yield all([
    takeEvery(ProjectActionTypes.FETCH_PROJECTS_REQUEST, fetchProjectsWorker),
    takeLatest(ProjectActionTypes.ADD_PROJECT_REQUEST, addProjectWorker),
    takeLatest(ProjectActionTypes.DELETE_PROJECT_REQUEST, deleteProjectWorker),
    takeLatest(ProjectActionTypes.EDIT_PROJECT_REQUEST, editProjectWorker),
  ])
}
