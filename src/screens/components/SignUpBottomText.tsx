import React from 'react'
import { CustomBottomText } from '../../components'
import { Navigation } from '../../types/props'

const SignUpBottomText: React.FC<{ navigation: Navigation }> = props => {
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
