// export all reducers
import { firebaseReducer } from 'react-redux-firebase';
import userReducer from './user'
import syllabusReducer from './syllabus'
import chatReducer from './chat'

const rootReducer = {
  firebaseReducer,
  userReducer,
  syllabusReducer,
  chatReducer
}

export default rootReducer

// export all actions
export * from './user'
export * from './syllabus'
export * from './chat'
