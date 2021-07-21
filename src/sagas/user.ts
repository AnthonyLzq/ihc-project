import { takeLatest } from 'redux-saga/effects'
import * as slices from '../slices'
import * as api from '../api'

export function* selectSyllabus() {
  yield takeLatest(
    slices.selectSyllabus,
    api.selectSyllabus
  )
}
