import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SvgBrain from './SvgBrain'
import { LogoProps } from '../types/props'
import { COLORS } from '../utils'

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
    fontFamily: 'Play_400Regular',
    fontSize  : 32
  },
  whiteColor: {
    color: '#FFF'
  }
})

const Logo = ({
  style: {
    containerHeight
  }
}: LogoProps) => (
  <View style={[{ height: containerHeight }, classes.container]}>
    <SvgBrain />
    <View style={classes.appName}>
      <Text style={[classes.text, classes.whiteColor]}>Assistant </Text>
      <Text style={[classes.ia, classes.text]}>AI</Text>
    </View>
  </View>
)

export default Logo
