import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import * as slices from '../slices'
import { ApiResponse, Syllabus } from '../types/props'
import { Get } from '../utils'

export function* getAllSyllabus(): SagaIterator {
  try {
    const response: ApiResponse<Syllabus[]> = yield call(Get, '/syllabus')
    yield put(slices.getAllSyllabusSuccess(response.message))
  } catch (error) {
    const message: string = error?.response?.data?.message || error?.message || 'There was an error'
    yield put(slices.getAllSyllabusError(message))
    alert(message)
  }
}
