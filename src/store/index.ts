import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import rootSaga from '@/store/saga';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore ( rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)