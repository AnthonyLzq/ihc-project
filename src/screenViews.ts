
import { ScreenView } from './types/props'
import {
  SignIn,
  SignInEmail,
  SelectCourses,
  SignUp,
  LastViewedCourses,
  CourseDetail
} from './screens'

const screens: ScreenView[] = [
  {
    name     : 'SignIn',
    component: SignIn
  },
  {
    name     : 'SignInEmail',
    component: SignInEmail
  },
  {
    name     : 'SelectCourses',
    component: SelectCourses
  },
  {
    name     : 'SignUp',
    component: SignUp
  },
  {
    name     : 'LastViewedCourses',
    component: LastViewedCourses
  },
  {
    name     : 'CourseDetail',
    component: CourseDetail
  }
]

export default screens