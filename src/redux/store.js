import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware(rootSaga);
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const composer = compose(middlewareEnhancer)
const store = createStore(rootReducer, composer)
sagaMiddleware.run(rootSaga);

export default store;
