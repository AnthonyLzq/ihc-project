import { takeLatest } from 'redux-saga/effects'
import * as slices from '../slices'
import * as api from '../api'

export function* signUpSaga() {
  yield takeLatest(
    slices.signUp,
    api.signUp
  )
}