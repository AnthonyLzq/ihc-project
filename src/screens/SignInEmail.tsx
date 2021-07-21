import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { SignInEmailProps } from '../types/props'
import {
  CustomInput,
  CustomButton,
  CustomBelowButtonText,
  GoBack
} from '../components'
import { SignUpBottomText } from './components'
import { COLORS, FONTS, EMAIL_REGEX, Get } from '../utils'
import { useFirebase } from 'react-redux-firebase'
import { useAppDispatch } from '../hooks'
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
    flexDirection : 'row',
    justifyContent: 'space-between',
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
  },
  textSubtitle: {
    fontFamily: FONTS.SECONDARY.REGULAR,
    fontSize  : 14
  }
})

const Login: React.FC<SignInEmailProps> = props => {
  const {
    navigation,
    route
  } = props
  const [email, setEmail] = React.useState<string>(route?.params?.email || '')
  const [password, setPassword] = React.useState<string>('')
  const firebase = useFirebase()
  const dispatch = useAppDispatch()

  const handleOnChangeEmail = (text: string) => setEmail(text)
  const handleOnChangePassword = (text: string) => setPassword(text)

  const signIn = () => {
    if (!email.match(EMAIL_REGEX)) {
      alert('Enter an valid email')

      return
    }

    signInWithFirebase()
  }

  const signInWithFirebase = async () => {
    try {
      dispatch(slices.signIn())
      const userCreds = await firebase.auth().signInWithEmailAndPassword(email, password)
      const { message } = await Get(`/user/${userCreds.user?.uid}`)

      dispatch(slices.signInSuccess(message))
      navigation.navigate('SelectCourses')
    } catch (error) {
      console.log(error);
      const message = error?.response?.data || error.message
      console.log('error message:', message);
      dispatch(slices.signInError(message))
      alert(message)
    }    
  }

  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <View style={classes.titleContainer}>
        <Text style={[classes.text, classes.textTitle]}>Welcome!</Text>
        <Text style={[classes.text, classes.textSubtitle]}>
          We're so excited to see you again!
        </Text>
      </View>
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          marginTop           : 40,
          placeHolder         : 'Email',
          placeHolderTextColor: COLORS.LEAD,
          size                : 16
        }}

        value={email}
        onChangeText={handleOnChangeEmail}
        keyboardType='email-address'
        icon='person'
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 16
        }}
        secureTextEntry={true}
        value={password}
        onChangeText={handleOnChangePassword}
        icon='lock'
      />
      <CustomButton
        hasIconRight={true}
        icon={{
          color: COLORS.WHITE,
          name : 'exit-to-app',
          size : 16,
          type : 'material'
        }}
        onPress={signIn}
        style={{
          color    : COLORS.PURPLE,
          titleSize: 16
        }}
        title='SIGN IN'
      />
      <View style={classes.textBelowButtonContainer}>
        <GoBack onPress={() => navigation.navigate('SignIn')}/>
        <CustomBelowButtonText
          text='Forgot password?'
        />
      </View>
      <SignUpBottomText navigation={navigation} />
    </View>
  )
}

export default Login
