import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Input } from 'react-native-elements'

import { CustomInputProps } from '../types/props'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  input: {
    backgroundColor: COLORS.MAIN_BLACK,
    borderRadius   : 6,
    height         : 48,
    width          : '100%'
  },
  withoutIcon: {
    paddingTop: 4
  }
})

const CustomInput: React.FC<CustomInputProps> = props => {
  const {
    style: {
      color,
      fontFamily = FONTS.INPUT.REGULAR,
      marginBottom = 25,
      marginTop,
      placeHolder,
      placeHolderTextColor,
      size
    },
    onChangeText,
    keyboardType,
    value,
    icon,
    iconLeft = icon ? true : false,
    secureTextEntry = false
  } = props

  const iconProps = icon ? {
    leftIcon: iconLeft ? <Icon color={placeHolderTextColor} name={icon} size={size} /> : undefined,
    rightIcon: !iconLeft ? <Icon color={placeHolderTextColor} name={icon} size={size} /> : undefined
  } : {}

  return (
    <View style={[
      classes.input,
      icon ? {} : classes.withoutIcon,
      { marginBottom, marginTop }
    ]}>
      <Input
        {...iconProps}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={{ color, fontSize: size, fontFamily }}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
      />
    </View>
  )
}

export default CustomInput
