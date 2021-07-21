import { takeLatest } from 'redux-saga/effects'
import * as slices from '../slices'
import * as api from '../api'

export function* getAllSyllabus() {
  yield takeLatest(
    slices.getAllSyllabus,
    api.getAllSyllabus
  )
}
