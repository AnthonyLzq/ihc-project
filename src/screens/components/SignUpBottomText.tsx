import React from 'react'
import { CustomBottomText } from '../../components'
import { GeneralScreenProps } from '../../types/props'

const SignUpBottomText: React.FC<GeneralScreenProps> = (props) => {
  const { navigation } = props

  return (
    <CustomBottomText
      text='Do you already have an account?'
      mainText='Sign In'
      ononPressMainText={() => navigation.navigate('SignIn')}
    />
  )
}

export default SignUpBottomText
