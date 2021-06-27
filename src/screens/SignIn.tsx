import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import {
  Logo,
  CustomButton
} from '../components'
import { SignInBottomText } from './components'
import { GeneralScreenProps } from '../types/props'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK,
    width: '100%',
    height: '100%'
  },
  signInMethodsContainer: {
    padding             : 32,
    alignItems          : 'center',
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    width               : '100%',
    height              : '50%'
  },
  or: {
    color       : '#FFF',
    fontFamily  : FONTS.MAIN.BOLD,
    fontSize    : 14,
    marginTop   : 12,
    marginBottom: 12
  }
})

const SignIn: React.FC<GeneralScreenProps> = (props) => {
  const { navigation } = props

  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <Logo style={{ height: '50%' }} />
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
        <SignInBottomText navigation={navigation} />
      </View>
    </View>
  )
}

export default SignIn
