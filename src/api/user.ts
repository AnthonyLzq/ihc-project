import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { ApiResponse, SelectCoursesBody, User } from '../types/props'
import * as slices from '../slices'
import { Patch } from '../utils'

export function* selectSyllabus(action: PayloadAction<SelectCoursesBody>): SagaIterator {
  try {
    const { id, selectedCourses, navigation } = action.payload
    const response: ApiResponse<User> = yield call(Patch, '/user/selectCourses', {
      args: {
        id,
        selectedCourses
      }
    })

    yield put(slices.selectSyllabusSuccess(response.message))
    navigation.reset({
      index: 0,
      routes: [
        { name: 'LastViewedCourses', params: { ids: selectedCourses, firstTime: true } }
      ]
    })
  } catch (error) {
    const message: string = error?.response?.data?.message || error?.message || 'There was an error'
    yield put(slices.selectSyllabusError(message))
    alert(message)
  }
}
