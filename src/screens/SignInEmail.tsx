import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import CustomBelowButtonText from '../components/CustomBelowButtonText'
import CustomBottomText from '../components/CustomBottomText'
import GoBack from '../components/GoBack'
import { SignInEmailProps } from '../types/props'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    alignItems     : 'center',
    backgroundColor: COLORS.SECOND_BLACK,
    height         : '100%',
    width          : '100%'
  },
  textBelowButtonContainer: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginTop     : 25,
    width         : '83%'
  },
  titleContainer: {
    alignItems  : 'center',
    marginBottom: 40,
    marginTop   : 50
  },
  text: {
    color: '#FFF'
  },
  textTitle: {
    fontFamily: 'Mukta_700Bold',
    fontSize  : 24
  },
  textSubtitle: {
    fontFamily: 'Mukta_400Regular',
    fontSize  : 14
  }
})

const Login = ({ navigation }: SignInEmailProps) => {
  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <View style={classes.titleContainer}>
        <Text style={[classes.text, classes.textTitle]}>Welcome back!</Text>
        <Text style={[classes.text, classes.textSubtitle]}>We're so excited to see you again!</Text>
      </View>
      <CustomInput
        style={{
          color               : COLORS.LEAD,
          icon                : 'person',
          marginTop           : 40,
          placeHolder         : 'Email',
          placeHolderTextColor: COLORS.LEAD,
          size                : 11
        }}
      />
      <CustomInput
        style={{
          color               : COLORS.LEAD,
          icon                : 'lock',
          placeHolder         : 'Password',
          placeHolderTextColor: COLORS.LEAD,
          size                : 11
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
  )
}

export default Login
