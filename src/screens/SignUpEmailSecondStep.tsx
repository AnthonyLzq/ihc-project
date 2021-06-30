import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { GeneralScreenProps } from '../types/props'
import {
  CustomInput,
  CustomButton,
  GoBack
} from '../components'
import { SignInBottomText } from './components'
import { COLORS, FONTS } from '../utils'

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

const SignUpEmailSecondStep: React.FC<GeneralScreenProps> = props => {
  const { navigation } = props

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
          size                : 14
        }}
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 14
        }}
        secureTextEntry
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Confirm password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 14
        }}
        secureTextEntry
      />
      <CustomButton
        hasIconRight
        icon={{
          color: COLORS.WHITE,
          name : 'exit-to-app',
          size : 16,
          type : 'material'
        }}
        onPress={() => navigation.navigate('SignUpEmailWelcome')}
        style={{
          color    : COLORS.PURPLE,
          titleSize: 16
        }}
        title='SIGN UP'
      />
      <View style={classes.textBelowButtonContainer}>
        <GoBack onPress={() => navigation.navigate('SignUpEmailFirstStep')}/>
      </View>
      <SignInBottomText navigation={navigation} />
    </View>
  )
}

export default SignUpEmailSecondStep
