import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import {
  Logo,
  CustomInput,
  CustomButton,
  CustomBelowButtonText,
  CustomBottomText,
  GoBack
} from '../components'
import { SignInEmailProps } from '../types/props'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK,
    width          : '100%',
    height         : '100%'
  },
  inputContainer: {
    padding: 32,
    alignItems          : 'center',
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopStartRadius: 26,
    borderTopEndRadius  : 26,
    height              : '63%',
    width               : '100%'
  },
  textBelowButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop    : 25,
    width        : '100%'
  }
})

const Login = ({ navigation }: SignInEmailProps) => {
  return (
    <View style={classes.container}>
      <StatusBar barStyle='default'/>
      <Logo style={{ height: '37%' }} />
      <View style={classes.inputContainer}>
        <CustomInput
          style={{
            color               : COLORS.LEAD,
            icon                : 'person',
            placeHolder         : 'Email',
            placeHolderTextColor: COLORS.LEAD,
            size                : 14
          }}
        />
        <CustomInput
          style={{
            color               : COLORS.LEAD,
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
            color: '#FFF',
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
        <CustomBottomText mainText='Sign Up' />
      </View>
    </View>
  )
}

export default Login
