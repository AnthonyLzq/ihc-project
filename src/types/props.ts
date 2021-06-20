import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  SignIn: undefined
  SignInEmail: undefined
}

type SignInProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>
}

type SignInEmailProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignInEmail'>
}

type LogoProps = {
  style: {
    containerHeight: string | number
  }
}

type CustomButtonProps = {
  style: {
    color      : string
    marginTop? : number
    titleColor?: string
    titleSize  : number
  }
  icon?: {
    color: string
    name : string
    size : number
    type : string
  }
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

type GoBackProps = {
  onPress: () => void
}

export {
  CustomBelowButtonTextProps,
  CustomBottomTextProps,
  CustomButtonProps,
  CustomInputProps,
  GoBackProps,
  LogoProps,
  SignInProps,
  SignInEmailProps
}