import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CustomBottomTextProps } from '../types/props'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  container:{
    position      : 'absolute',
    alignItems    : 'center',
    bottom        : 0,
    marginBottom  : 32
  },
  text: {
    color     : '#FFF',
    fontFamily: FONTS.MAIN,
    fontSize  : 12
  },
  mainText: {
    color: COLORS.RED,
    fontFamily: FONTS.MAIN,
    fontSize: 14
  }
})

const CustomBottomText = ({ mainText }: CustomBottomTextProps) => (
  <View style={[classes.container]}>
    <View>
      <Text style={classes.text}>Do not have an account yet?</Text>
    </View>
    <View>
      <Text style={classes.mainText}>{mainText}</Text>
    </View>
  </View>
)

export default CustomBottomText

