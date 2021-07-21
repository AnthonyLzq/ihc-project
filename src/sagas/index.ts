import { all, fork } from 'redux-saga/effects'
import * as userSagas from './user'
import * as syllabusSagas from './syllabus'

function* rootSaga() {
  yield all([
    ...Object.values(userSagas).map(saga => fork(saga)),
    ...Object.values(syllabusSagas).map(saga => fork(saga))
  ])
}

export default rootSaga