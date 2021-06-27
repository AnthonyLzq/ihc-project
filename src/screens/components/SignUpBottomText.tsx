import React from 'react'
import { CustomBottomText } from '../../components'
import { GeneralScreenProps } from '../../types/props'

const SignUpBottomText: React.FC<GeneralScreenProps> = props => {
  const { navigation } = props

  return (
    <CustomBottomText
      text='Do not have an account yet?'
      mainText='Sign Up'
      onPressMainText={() => navigation.navigate('SignUp')}
    />
  )
}

export default SignUpBottomText
