import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SvgBrain from './SvgBrain'
import { LogoProps } from '../types/props'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  container: {
    alignItems    : 'center',
    flex          : 1,
    justifyContent: 'center'
  },
  appName: {
    flexDirection: 'row',
  },
  ia: {
    color     : COLORS.PURPLE,
    fontWeight: 'bold'
  },
  text: {
    fontFamily: FONTS.LOGO.REGULAR,
    fontSize  : 32
  },
  whiteColor: {
    color: '#FFF'
  }
})

const Logo = ({
  style: {
    height
  }
}: LogoProps) => (
  <View style={[{ height }, classes.container]}>
    <SvgBrain />
    <View style={classes.appName}>
      <Text style={[classes.text, classes.whiteColor]}>Assistant </Text>
      <Text style={[classes.ia, classes.text]}>AI</Text>
    </View>
  </View>
)

export default Logo
