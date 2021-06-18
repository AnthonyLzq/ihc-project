import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  Login: undefined
}

type LogoProps = {
  style: {
    containerHeight: string | number
  }
}

type CustomButtonProps = {
  style: {
    color      : string
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

export {
  CustomBelowButtonTextProps,
  CustomBottomTextProps,
  CustomButtonProps,
  CustomInputProps,
  LogoProps
}