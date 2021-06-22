import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { CustomBelowButtonTextProps } from '../types/props'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  text: {
    color     : COLORS.RED,
    fontFamily: 'Padauk_700Bold',
    fontSize  : 14
  }
})

const CustomBelowButtonText = ({ text }: CustomBelowButtonTextProps) => (
  <Text style={classes.text}>
    {text}
  </Text>
)

export default CustomBelowButtonText