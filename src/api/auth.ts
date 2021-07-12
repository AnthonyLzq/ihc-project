import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import * as slices from '../slices'
import { User } from '../types/props'
import { Get } from '../utils'

export function* signIn(): SagaIterator {
  try {
    // example of fetching data
    // const response = yield call(Get, '/posts')
    
    // mock user response
    const userResponse: User = {
      names: 'Bryan',
      lastnames: 'Vera',
      email: 'gverae@uni.pe'
    } 

    console.log(userResponse)
    yield put(slices.signInSuccess(userResponse))
  } catch (error) {
    alert('There was an error')
    yield put(slices.signInError('There was an error'))
  }
}