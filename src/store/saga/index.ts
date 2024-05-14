import { all, call } from 'redux-saga/effects';

import { tasksWatcher } from './taskSagas';
import { projectsWatcher } from './projectSagas';
import { notificationsWatcher } from './notificationSagas';
import { modalWatcher } from './modalSagas';
import { filterWatcher } from './filterSagas';

export default function* rootSaga() {
 yield all( [
   call(tasksWatcher),
   call(projectsWatcher),
   call(notificationsWatcher),
   call(modalWatcher),
   call(filterWatcher),
 ]);
}
