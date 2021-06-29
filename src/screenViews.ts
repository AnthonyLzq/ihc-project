
import { ScreenView } from './types/props'
import {
  SignIn,
  SignInEmail,
  SelectCourses,
  LastViewedCourses,
  CourseDetail,
  SignUp,
  SignUpEmailFirstStep,
  SignUpEmailSecondStep,
  SignUpEmailWelcome
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
    name     : 'CourseDetail',
    component: CourseDetail
  },
  {
    name     : 'SignUp',
    component: SignUp
  },
  {
    name     : 'SignUpEmailFirstStep',
    component: SignUpEmailFirstStep
  },
  {
    name     : 'SignUpEmailSecondStep',
    component: SignUpEmailSecondStep
  },
  {
    name     : 'SignUpEmailWelcome',
    component: SignUpEmailWelcome
  }
]

export default screens