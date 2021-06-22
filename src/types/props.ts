import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  SignIn       : undefined
  SignInEmail  : undefined
  SelectCourses: undefined
}

type SignInProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>
}

type SignInEmailProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignInEmail'>
}

type SelectCoursesProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SelectCourses'>
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
  mainText: string
}

type HeaderProps = {
  goBack?: boolean
  logout : () => void
  style? : {
    height?: number | string
  }
}

type SvgBrainProps = {
  height?: string
  width? : string
}

type GoBackProps = {
  onPress: () => void
}

type CourseCardProps = {
  available: boolean
  course   : string
  icon     : string
  iconType : string
  id       : string
  onPress  : (b: boolean, s: string) => void
  style?   : {
    marginRight?: number
  }
}

export {
  CourseCardProps,
  CustomBelowButtonTextProps,
  CustomBottomTextProps,
  CustomButtonProps,
  CustomInputProps,
  GoBackProps,
  HeaderProps,
  LogoProps,
  SelectCoursesProps,
  SignInProps,
  SignInEmailProps,
  SvgBrainProps
}