// export all reducers
import { firebaseReducer } from 'react-redux-firebase';
import userReducer from './user'
import syllabusReducer from './syllabus'

const rootReducer = {
  firebaseReducer,
  userReducer,
  syllabusReducer
}

export default rootReducer

// export all actions
export * from './user'
export * from './syllabus'