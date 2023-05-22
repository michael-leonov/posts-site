import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootSaga from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
