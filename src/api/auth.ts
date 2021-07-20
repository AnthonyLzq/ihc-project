import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import * as slices from '../slices'
import { Get } from '../utils'

export function* signUp(action: any): SagaIterator {
  try {
    const {
      names,
      lastnames,
      email,
      password,
      navigation
    } = action.payload
    // example of fetching data
    const response = yield call(Get, '/posts')
    yield call(delaay)
    console.log(response)

    // mock user response
    const userResponse = {
      names,
      lastnames,
      email,
      password
    } 

    console.log(userResponse)
    yield put(slices.signUpSuccess(userResponse))

    navigation.navigate('SignUpEmailWelcome', {
      names,
      email
    })
  } catch (error) {
    alert('There was an error')
    yield put(slices.signUpError('There was an error'))
  }
}

const delaay = () => new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 5000)
})