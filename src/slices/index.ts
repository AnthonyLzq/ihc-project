// export all reducers
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './auth'
import syllabusReducer from './syllabus'

const rootReducer = {
  firebaseReducer,
  authReducer,
  syllabusReducer
}

export default rootReducer

// export all actions
export * from './auth'
export * from './syllabus'