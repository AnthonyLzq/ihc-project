import { all, fork } from 'redux-saga/effects'
// import * as authSagas from './auth'

function* rootSaga() {
  yield all([
    // ...Object.values(authSagas).map(saga => fork(saga))
  ])
}

export default rootSaga