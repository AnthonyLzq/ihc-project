import { ComponentType } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { KeyboardTypeOptions } from 'react-native'

type RootStackParamList = {
  SignIn           : undefined
  SignInEmail?     : {
    email: string
  }
  SelectCourses    : undefined
  LastViewedCourses: {
    firstTime: boolean
    ids      : string[]
  }
  CourseDetail: {
    id: string
  }
  AllCourses:  {
    ids: string[]
  }
  Chat                 : undefined
  SignUp               : undefined
  SignUpEmailFirstStep : undefined
  SignUpEmailSecondStep: {
    names     : string
    lastnames : string
  }
  SignUpEmailWelcome   : {
    names: string
    email: string
  }
}

type ScreenViewNames = keyof RootStackParamList
type Navigation = StackNavigationProp<RootStackParamList, ScreenViewNames>
type GeneralScreenProps<T extends ScreenViewNames> = {
  navigation: Navigation
  route?    : RouteProp<RootStackParamList, T>
}

type SignInProps = GeneralScreenProps<'SignIn'>
type SignInEmailProps = GeneralScreenProps<'SignInEmail'>
type SelectCoursesProps = GeneralScreenProps<'SelectCourses'>
type LastViewedCoursesProps = GeneralScreenProps<'LastViewedCourses'>
type CourseDetailProps = GeneralScreenProps<'CourseDetail'>
type AllCoursesProps = GeneralScreenProps<'AllCourses'>
type SignUpProps = GeneralScreenProps<'SignUp'>
type SignUpEmailFirstStepProps = GeneralScreenProps<'SignUpEmailFirstStep'>
type SignUpEmailSecondStepProps = GeneralScreenProps<'SignUpEmailSecondStep'>
type SignUpEmailWelcomeProps = GeneralScreenProps<'SignUpEmailWelcome'>

type ScreenView = {
  name     : ScreenViewNames
  component: 
    | ComponentType<SignInProps>
    | ComponentType<SignInEmailProps>
    | ComponentType<SelectCoursesProps>
    | ComponentType<LastViewedCoursesProps>
    | ComponentType<CourseDetailProps>
    | ComponentType<AllCoursesProps>
    | ComponentType<SignUpProps>
    | ComponentType<SignUpEmailFirstStepProps>
    | ComponentType<SignUpEmailSecondStepProps>
    | ComponentType<SignUpEmailWelcomeProps>
}

type LogoProps = {
  style: {
    height: string | number
  }
}

type CustomButtonProps = {
  style: {
    color        : string
    marginBottom?: number
    marginTop?   : number
    titleColor?  : string
    titleSize    : number
  }
  icon?: {
    color: string
    name : string
    size : number
    type : string
  }
  disabled?    : boolean
  hasIconLeft? : boolean
  hasIconRight?: boolean
  onPress?     : () => void
  title        : string
  type?        : 'solid' | 'clear' | 'outline'
}

type CustomInputProps = {
  style: {
    color               : string
    fontFamily?         : string
    marginBottom?       : string | number
    marginTop?          : string | number
    placeHolder         : string
    placeHolderTextColor: string
    size                : number
  },
  onChangeText?   : (text: string) => void
  keyboardType?   : KeyboardTypeOptions
  value?          : string
  icon?           : string
  iconLeft?       : boolean
  secureTextEntry?: boolean
}

type CustomBelowButtonTextProps = {
  text: string
}

type CustomBottomTextProps = {
  mainText       : string
  text           : string
  onPressMainText: () => void
}

type HeaderProps = {
  style?      : {
    height?   : number | string
  }
  goBack?     : boolean
  goBackCB?   : () => void
  navigation  : Navigation
}

type SvgBrainProps = {
  height?: string
  width? : string
}

type SvgWelcomeProps = {
  height?: string
  width? : string
}

type GoBackProps = {
  onPress: () => void
}

type SelectCourseCardProps = {
  style?   : {
    marginRight?: number
  }
  available: boolean
  course   : string
  icon     : string
  iconType : string
  id       : string
  onPress  : (b: boolean, s: string) => void
}

type CourseCardProps = {
  style: {
    color       : string
    marginBottom: number
  }
  course  : string
  icon    : string
  iconType: string
  onPress : () => void
}

interface User {
  id              : string
  name            : string
  lastName        : string
  selectedCourses : string[]
}

type MessageProps = {
  content: {
    text     : string
    resources: string[]
  },
  date   : Date
  fromBot: boolean
}

interface UserSignInCredentials {
  email: string
  password: string
}
interface UserSignUpCredentials extends UserSignInCredentials {
  names: string
  lastnames: string
}

interface AnalyticProgramItem {
  themes? : string[]
  topic   : string
}

interface BibliographyItem {
  category? : string
  rates     : number
  name      : string
  rating    : number
}

interface Course {
  name  : string
  code  : string
}

interface Syllabus {
  analyticProgram   : AnalyticProgramItem[]
  bibliography      : BibliographyItem[]
  competencies      : string[]
  generalInfo       : {
    condition: string
    course: Course
    credits: number
    evaluationSystem: string
    hoursPerWeek    : {
      laboratory?     : number
      practice?       : number
      theory          : number
      total           : number
    }
    preRequirements?  : Course[]
  }
  icon?             : string
  sommelier         : string
}

interface ApiResponse<T> {
  error   : boolean
  message : T
}

export {
  SelectCourseCardProps,
  CustomBelowButtonTextProps,
  CustomBottomTextProps,
  CustomButtonProps,
  CustomInputProps,
  GoBackProps,
  HeaderProps,
  LogoProps,
  Navigation,
  SvgBrainProps,
  CourseCardProps,
  ScreenView,
  GeneralScreenProps,
  SvgWelcomeProps,
  User,
  SignInProps,
  SignInEmailProps,
  SelectCoursesProps,
  LastViewedCoursesProps,
  CourseDetailProps,
  AllCoursesProps,
  SignUpProps,
  SignUpEmailFirstStepProps,
  SignUpEmailSecondStepProps,
  SignUpEmailWelcomeProps,
  MessageProps,
  UserSignInCredentials,
  UserSignUpCredentials,
  Syllabus,
  ApiResponse
}
