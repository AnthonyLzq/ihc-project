
import { Route } from './types/props'
import {
  SignIn,
  SignInEmail,
  SelectCourses,
  LastViewedCourses
} from './screens'

const routes: Route[] = [
  {
    name: 'SignIn',
    component: SignIn
  },
  {
    name: 'SignInEmail',
    component: SignInEmail
  },
  {
    name: 'SelectCourses',
    component: SelectCourses
  },
  {
    name: 'LastViewedCourses',
    component: LastViewedCourses
  }
]

export default routes