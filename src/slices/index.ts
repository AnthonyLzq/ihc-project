// export all reducers
import { firebaseReducer } from 'react-redux-firebase';
// import { firestoreReducer } from 'redux-firestore';
import authReducer from './auth'

const rootReducer = {
  authReducer,
  firebaseReducer
  // firestoreReducer
}

export default rootReducer

// export all actions
export * from './auth'