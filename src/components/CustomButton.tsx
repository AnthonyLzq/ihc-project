import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

import { CustomButtonProps } from '../types/props'
import { FONTS, COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    borderRadius: 6,
    height      : 48,
    width       : '100%'
  }
})

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {
    style: {
      color,
      marginBottom = 0,
      marginTop = 0,
      titleColor = COLORS.WHITE,
      titleSize
    },
    disabled = false,
    icon,
    hasIconLeft = false,
    hasIconRight = false,
    onPress = () => {},
    title,
    type = 'solid'
  } = props

  return (
    <View style={[classes.container, { marginBottom, marginTop }]}>
      {hasIconLeft ? (
        <Button
          buttonStyle={{
            backgroundColor: color,
            height         : '100%'
          }}
          disabled={disabled}
          icon={{
            color: icon?.color,
            name : icon?.name,
            size : icon?.size,
            type : icon?.type
          }}
          onPress={onPress}
          title={title}
          titleStyle={{
            color     : titleColor,
            fontSize  : titleSize,
            fontFamily: FONTS.MAIN.BOLD,
            marginLeft: 8,
            marginTop : 4
          }}
          type={type}
        />
      ) : hasIconRight ? (
        <Button
          buttonStyle={{
            backgroundColor: color,
            height         : '100%'
          }}
          disabled={disabled}
          icon={{
            color: icon?.color,
            name : icon?.name,
            size : icon?.size,
            type : icon?.type
          }}
          onPress={onPress}
          title={title}
          titleStyle={{
            color      : titleColor,
            fontSize   : titleSize,
            fontFamily : FONTS.MAIN.BOLD,
            marginRight: 8,
            marginTop  : 4
          }}
          type={type}
          iconRight
        />
      ) : (
        <Button
          buttonStyle={{
            backgroundColor: color,
            height         : '100%'
          }}
          disabled={disabled}
          onPress={onPress}
          title={title}
          titleStyle={{
            color     : titleColor,
            fontSize  : titleSize,
            fontFamily: FONTS.MAIN.BOLD
          }}
          type={type}
          iconRight
        />
      )}
    </View>
  )
}

export default CustomButton
