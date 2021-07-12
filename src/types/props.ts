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
  SignUp               : undefined
  SignUpEmailFirstStep : undefined
  SignUpEmailSecondStep: {
    names     : string
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
    icon?               : string
    fontFamily?         : string
    marginTop?          : string | number
    placeHolder         : string
    placeHolderTextColor: string
    size                : number
  },
  secureTextEntry?      : boolean
  onChangeText?         : (text: string) => void
  keyboardType?         : KeyboardTypeOptions
  value?                : string
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
  style?: {
    height?: number | string
  }
  goBack?  : boolean
  goBackCB?: () => void
  logout   : () => void
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
  names: string
  lastnames: string
  email: string
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
  SignUpEmailWelcomeProps
}
