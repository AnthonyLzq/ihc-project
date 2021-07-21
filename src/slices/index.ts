// export all reducers
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './auth'

const rootReducer = {
  authReducer,
  firebaseReducer
}

export default rootReducer

// export all actions
export * from './auth'