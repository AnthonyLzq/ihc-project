import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CustomBottomTextProps } from '../types/props'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  container:{
    flex          : 1,
    alignItems    : 'center',
    justifyContent: 'flex-end'
  },
  text: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.MAIN.REGULAR,
    fontSize  : 12
  },
  mainText: {
    color     : COLORS.RED,
    fontFamily: FONTS.MAIN.BOLD,
    fontSize  : 14
  }
})

const CustomBottomText: React.FC<CustomBottomTextProps> = props => {
  const { mainText, text, onPressMainText } = props

  return (
    <View style={classes.container}>
      <View>
        <Text style={classes.text}>{text}</Text>
      </View>
      <View>
        <Text style={classes.mainText} onPress={onPressMainText}>
          {mainText}
        </Text>
      </View>
    </View>
  )
}

export default CustomBottomText

