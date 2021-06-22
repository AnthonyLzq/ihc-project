import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Logo from '../components/Logo'
import CustomButton from '../components/CustomButton'
import CustomBottomText from '../components/CustomBottomText'
import { SignInProps } from '../types/props'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    alignItems     : 'center',
    backgroundColor: COLORS.MAIN_BLACK,
    flex           : 1,
    justifyContent : 'center'
  },
  signInMethodsContainer: {
    alignItems          : 'center',
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : '49%',
    width               : '100%'
  },
  or: {
    color       : '#FFF',
    fontFamily  : 'Padauk_700Bold',
    fontSize    : 14,
    marginTop   : 12,
    marginBottom: 12
  }
})

const SignIn = ({ navigation }: SignInProps) => {
  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <Logo style={{ height: '51%' }} />
      <View style={classes.signInMethodsContainer}>
        <CustomButton
          icon={{
            color: COLORS.SECOND_BLACK,
            name : 'google',
            size : 16,
            type : 'material-community'
          }}
          hasIconLeft={true}
          style={{
            color     : '#FFF',
            marginTop : 30,
            titleSize : 16,
            titleColor: COLORS.SECOND_BLACK
          }}
          title='SIGN IN WITH GOOGLE'
        />
        <Text style={classes.or}>or</Text>
        <CustomButton
          icon={{
            color: '#FFF',
            name : 'mail',
            size : 16,
            type : 'material'
          }}
          hasIconLeft={true}
          onPress={() => navigation.navigate('SignInEmail')}
          style={{
            color     : COLORS.PURPLE,
            titleSize : 16,
            titleColor: '#FFF'
          }}
          title='SIGN IN WITH EMAIL'
        />
        <CustomBottomText mainText='Sign Up' />
      </View>
    </View>
  )
}

export default SignIn
