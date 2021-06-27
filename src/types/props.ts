import { ComponentType } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type ScreenViewNames = 'SignIn' | 'SignInEmail' | 'SelectCourses' | 'LastViewedCourses'

type RootStackParamList = {
  SignIn           : undefined
  SignInEmail      : undefined
  SelectCourses    : undefined
  LastViewedCourses: {
    firstTime: boolean
    ids      : string[]
  }
}

type GeneralScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, ScreenViewNames>
}

type ScreenView = {
  name     : ScreenViewNames
  component: ComponentType<GeneralScreenProps> | ComponentType<LastViewedCoursesProps>
}

// type SignInProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'SignIn'>
// }

// type SignInEmailProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'SignInEmail'>
// }

// type SelectCoursesProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'SelectCourses'>
// }

type LastViewedCoursesProps = GeneralScreenProps & {
  // navigation: StackNavigationProp<RootStackParamList, 'LastViewedCourses'>
  route: RouteProp<RootStackParamList, 'LastViewedCourses'>
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
    icon                : string
    fontFamily?         : string
    marginTop?          : string | number
    placeHolder         : string
    placeHolderTextColor: string
    size                : number
  },
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
  // SelectCoursesProps,
  // SignInProps,
  // SignInEmailProps,
  SvgBrainProps,
  LastViewedCoursesProps,
  CourseCardProps,
  ScreenView,
  GeneralScreenProps
}