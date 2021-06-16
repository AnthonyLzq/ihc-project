import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../utils'
import { CustomBottomTextProps } from '../types/props'

const classes = StyleSheet.create({
  container:{
    flex          : 1,
    alignItems    : 'center',
    justifyContent: 'flex-end',
    marginBottom  : 33
  },
  text: {
    color     : '#FFF',
    fontFamily: 'Padauk_700Bold',
    fontSize  : 12
  },
  mainText: {
    color: COLORS.RED,
    fontFamily: 'Padauk_700Bold',
    fontSize: 14
  }
})

const CustomBottomText = ({ mainText }: CustomBottomTextProps) => (
  <View style={classes.container}>
    <View>
      <Text style={classes.text}>Do not have an account yet?</Text>
    </View>
    <View>
      <Text style={classes.mainText}>{mainText}</Text>
    </View>
  </View>
)

export default CustomBottomText

