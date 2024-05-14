import { all, put, takeEvery } from 'redux-saga/effects';
import { showModal } from '@/store/actions/modalActions';
import { ModalActionTypes } from '@/types/modal';

function* openModalSaga(action: any) {
  put(showModal(action.payload.payload));
}

export function* modalWatcher() {
  yield all([
    takeEvery(ModalActionTypes.SHOW_MODAL, openModalSaga),
  ])
}
