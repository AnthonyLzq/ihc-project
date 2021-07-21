import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'

import { SignUpEmailWelcomeProps } from '../types/props'
import { SvgWelcome } from './components'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor : COLORS.MAIN_BLACK,
    height          : '100%',
    width           : '100%',
    padding         : 32,
  },
  title: {
    color     : COLORS.PURPLE,
    fontFamily: FONTS.SECONDARY.BOLD,
    fontSize  : 50,
    textAlign : 'center',
    marginTop : 50
  },
  names: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.SECONDARY.REGULAR,
    fontSize  : 30,
    textAlign : 'center'
  },
  welcomeMessage: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.SECONDARY.REGULAR,
    fontSize  : 20,
    textAlign : 'center',
    marginTop : 30
  },
  highlightedText: {
    color     : COLORS.PURPLE,
    fontFamily: FONTS.SECONDARY.BOLD,
  },
  signInText: {
    color     : COLORS.RED,
    fontFamily: FONTS.MAIN.BOLD,
    fontSize  : 20
  },
  signInButton: {
    flex          : 1,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems    : 'center'
  },
  svgMessage: {
    marginTop   : 100,
    marginBottom: 50
  }
})

const SignUpEmailWelcome: React.FC<SignUpEmailWelcomeProps> = props => {
  const {
    navigation,
    route
  } = props

  const signInWithEmail = () => 
    navigation.reset({
      index: 1,
      routes: [
        { name: 'SignIn' },
        { name: 'SignInEmail', params: { email: route?.params.email || '' } }
      ]
    })

  return (
    <View style={classes.container}>
      <View>
        <Text style={classes.title}>Welcome!</Text>
        <Text style={classes.names}>{route?.params?.names.split(' ')[0].trim()}</Text>
      </View>
      <View style={classes.svgMessage}>
        <SvgWelcome width='100%' />
        <Text style={classes.welcomeMessage}>
          Start <Text style={classes.highlightedText}>discovering</Text> and {' '}
          <Text style={classes.highlightedText}>learning</Text> new courses {' '}
          <Text style={classes.highlightedText}>now</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={signInWithEmail}
        style={classes.signInButton}
      >
        <Text style={classes.signInText}>Sign In</Text>
        <Icon
          color={COLORS.RED}
          name='chevron-right'
          type='material'
          size={24}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SignUpEmailWelcome
