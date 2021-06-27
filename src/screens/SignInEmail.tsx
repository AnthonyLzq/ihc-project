import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import {
  CustomInput,
  CustomButton,
  CustomBelowButtonText,
  GoBack
} from '../components'
import { SignInBottomText } from './components'
import { GeneralScreenProps } from '../types/props'
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

const Login: React.FC<GeneralScreenProps> = (props) => {
  const { navigation } = props
  
  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <View style={classes.titleContainer}>
        <Text style={[classes.text, classes.textTitle]}>Welcome back!</Text>
        <Text style={[classes.text, classes.textSubtitle]}>We're so excited to see you again!</Text>
      </View>
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          icon                : 'person',
          marginTop           : 40,
          placeHolder         : 'Email',
          placeHolderTextColor: COLORS.LEAD,
          size                : 14
        }}
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          icon                : 'lock',
          placeHolder         : 'Password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 14
        }}
        secureTextEntry={true}
      />
      <CustomButton
        hasIconRight={true}
        icon={{
          color: COLORS.WHITE,
          name : 'exit-to-app',
          size : 16,
          type : 'material'
        }}
        onPress={() => navigation.navigate('SelectCourses')}
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
      <SignInBottomText navigation={navigation} />
    </View>
  )
}

export default Login
