import { all, put, takeEvery } from 'redux-saga/effects';
import { setFilter } from '@/store/actions/filterActions';
import { FilterActionTypes } from '@/types/filter';

function* setFilterWorker(action: any) {
  put(setFilter(action.payload.payload));
}

export function* filterWatcher() {
  yield all([
    takeEvery(FilterActionTypes.SET_FILTER, setFilterWorker),
  ])
}
