import { all, fork } from 'redux-saga/effects'
import * as syllabusSagas from './syllabus'

function* rootSaga() {
  yield all([
    ...Object.values(syllabusSagas).map(saga => fork(saga))
  ])
}

export default rootSaga