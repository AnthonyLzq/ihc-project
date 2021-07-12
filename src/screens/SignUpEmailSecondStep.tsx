import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { SignUpEmailSecondStepProps } from '../types/props'
import {
  CustomInput,
  CustomButton,
  GoBack
} from '../components'
import { SignInBottomText } from './components'
import { COLORS, FONTS, EMAIL_REGEX } from '../utils'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import * as slices from '../slices'

const classes = StyleSheet.create({
  container: {
    alignItems     : 'center',
    backgroundColor: COLORS.SECOND_BLACK,
    height         : '100%',
    width          : '100%',
    padding        : 32
  },
  textBelowButtonContainer: {
    marginTop     : 25,
    width         : '100%'
  },
  titleContainer: {
    alignItems  : 'center',
    marginBottom: 40,
    marginTop   : 50
  },
  text: {
    color: COLORS.WHITE
  },
  textTitle: {
    fontFamily: FONTS.SECONDARY.BOLD,
    fontSize  : 24
  }
})

const SignUpEmailSecondStep: React.FC<SignUpEmailSecondStepProps> = props => {
  const {
    navigation,
    route
  } = props
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const dispatch = useDispatch<AppDispatch>()

  const handleOnChangeEmail = (text: string) => setEmail(text)
  const handleOnChangePassword = (text: string) => setPassword(text)
  const handleOnChangeConfirmPassword = (text: string) => setConfirmPassword(text)

  const signUp = () => {
    if (!email.match(EMAIL_REGEX)) {
      alert('Enter an valid email')

      return
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match')

      return
    }

    dispatch(slices.signIn())

    // navigation.navigate('SignUpEmailWelcome', {
    //   route?.params?.names,
    //   email
    // })
  }

  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <View style={classes.titleContainer}>
        <Text style={[classes.text, classes.textTitle]}>And your credentials</Text>
      </View>
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Email',
          placeHolderTextColor: COLORS.LEAD,
          size                : 16
        }}
        onChangeText={handleOnChangeEmail}
        keyboardType='email-address'
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 16
        }}
        secureTextEntry
        onChangeText={handleOnChangePassword}
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Confirm password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 16
        }}
        secureTextEntry
        onChangeText={handleOnChangeConfirmPassword}
      />
      <CustomButton
        hasIconRight
        icon={{
          color: COLORS.WHITE,
          name : 'exit-to-app',
          size : 16,
          type : 'material'
        }}
        onPress={signUp}
        style={{
          color    : COLORS.PURPLE,
          titleSize: 16
        }}
        title='SIGN UP'
        disabled={email.length === 0 || password.length === 0 || confirmPassword.length === 0}
      />
      <View style={classes.textBelowButtonContainer}>
        <GoBack onPress={() => navigation.navigate('SignUpEmailFirstStep')}/>
      </View>
      <SignInBottomText navigation={navigation} />
    </View>
  )
}

export default SignUpEmailSecondStep
