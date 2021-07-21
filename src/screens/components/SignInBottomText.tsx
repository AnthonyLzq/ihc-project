import React from 'react'
import { CustomBottomText } from '../../components'
import { Navigation } from '../../types/props'

const SignInBottomText: React.FC<{ navigation: Navigation }> = props => {
  const { navigation } = props

  return (
    <CustomBottomText
      text='Do you already have an account?'
      mainText='Sign In'
      onPressMainText={() => navigation.navigate('SignIn')}
    />
  )
}

export default SignInBottomText
