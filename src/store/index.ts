import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(
            middleware
        ),
});

export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);
