import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './slices'
import rootSaga from './sagas'

const _configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware, logger]

  const store = configureStore({
    reducer: rootReducer,
    middleware: [ ...getDefaultMiddleware({ thunk: false, serializableCheck: false }), ...middlewares ],
    devTools: process.env.NODE_ENV !== 'production'
  })

  sagaMiddleware.run(rootSaga)

  return store
}

const store = _configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store