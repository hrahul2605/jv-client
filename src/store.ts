import { createStore, applyMiddleware, compose, Action } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import { DefaultRootState } from './reducers/types';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools(),
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<DefaultRootState, Action<any>, unknown, unknown>(
  reducers,
  enhancers,
);
sagaMiddleware.run(sagas);
export { store };
