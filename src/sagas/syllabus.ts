import { takeLatest } from 'redux-saga/effects'
import * as slices from '../slices'
import * as api from '../api'

export function* getInitialSyllabus() {
  yield takeLatest(
    slices.getInitialSyllabus,
    api.getInitialSyllabus
  )
}
