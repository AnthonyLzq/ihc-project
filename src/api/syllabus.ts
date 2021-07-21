import { PayloadAction } from '@reduxjs/toolkit'
import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import * as slices from '../slices'
import { ApiResponse, SelectCoursesBody, Syllabus } from '../types/props'
import { Get, Post } from '../utils'

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

export function* getRecommendedSyllabus(action: PayloadAction<SelectCoursesBody>): SagaIterator {
  try {
    const { id, selectedCourses } = action.payload
    const response: ApiResponse<Syllabus[]> = yield call(Post, '/recommender', {
      args: {
        id,
        selectedCourses
      }
    })
    yield put(slices.getRecommendedSyllabusSuccess(response.message))
  } catch (error) {
    const message: string = error?.response?.data?.message || error?.message || 'There was an error'
    yield put(slices.getRecommendedSyllabusError(message))
    alert(message)
  }
}
