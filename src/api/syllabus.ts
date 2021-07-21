import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import * as slices from '../slices'
import { ApiResponse, Syllabus } from '../types/props'
import { Get } from '../utils'

const selectNCoursesRandomly = (courses: Syllabus[], size: number = 6): Syllabus[] => {
  const randomIndexes = getDifferentRandomNumbers(size, courses.length)
  const selectedCourses = courses.filter((_, cIndex) => randomIndexes.includes(cIndex)) 

  return selectedCourses
}

const getDifferentRandomNumbers = (size: number, maxNumber: number) => {
  const randomNumbers: number[] = []

  while (randomNumbers.length < size) {
    const randomNumber = Math.floor(Math.random() * maxNumber)
    if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber)
  }

  return randomNumbers
}

export function* getInitialSyllabus(): SagaIterator {
  try {
    const response: ApiResponse<Syllabus[]> = yield call(Get, '/syllabus')

    const initialCourses = selectNCoursesRandomly(response.message)
    yield put(slices.getInitialSyllabusSuccess(initialCourses))
  } catch (error) {
    const message: string = error?.response?.data?.message || error?.message || 'There was an error'
    yield put(slices.getInitialSyllabusError(message))
    alert(message)
  }
}
