import createSagaMiddleware from 'redux-saga';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootSaga from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
