
import { ScreenView } from './types/props'
import {
  SignIn,
  SignInEmail,
  SelectCourses,
  LastViewedCourses,
  SignUp
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
    name     : 'LastViewedCourses',
    component: LastViewedCourses
  },
  {
    name     : 'SignUp',
    component: SignUp
  }
]

export default screens