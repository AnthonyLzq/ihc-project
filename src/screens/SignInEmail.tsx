import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import Logo from '../components/Logo'
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
    backgroundColor: COLORS.MAIN_BLACK,
    flex           : 1,
    justifyContent : 'center'
  },
  inputContainer: {
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
    width        : '83%'
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
            marginTop           : 32,
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
    </View>
  )
}

export default Login
