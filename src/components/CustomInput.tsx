import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
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
    secureTextEntry = false,
    hasTouchableOpacity = false,
    onPressIcon = undefined,
    onPressInIcon = undefined,
    onPressOutIcon = undefined
  } = props
  const [isPress, setIsPress] = React.useState(false)

  const touchableOpacityProps = {
    activeOpacity: 1,
    underlayColor: COLORS.RED,                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: { backgroundColor: COLORS.SECOND_BLACK, borderRadius: 50, padding: 8 },
    onPressIn: onPressInIcon,
    onPressOut: onPressOutIcon,
    onPress: onPressIcon,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true)
  }

  const iconProps = icon ? {
    leftIcon: iconLeft ? 
              (hasTouchableOpacity ? 
                <TouchableHighlight {...touchableOpacityProps}>
                  <Icon color={!isPress ? placeHolderTextColor : COLORS.WHITE} name={icon} size={size} />
                </TouchableHighlight> :
                <Icon color={!isPress ? placeHolderTextColor : COLORS.WHITE} name={icon} size={size} />) :
                undefined,
    rightIcon: !iconLeft ?
              (hasTouchableOpacity ?
                <TouchableHighlight {...touchableOpacityProps}>
                  <Icon color={!isPress ? placeHolderTextColor : COLORS.WHITE} name={icon} size={size} />
                </TouchableHighlight> :
                <Icon color={!isPress ? placeHolderTextColor : COLORS.WHITE} name={icon} size={size} />) :
                undefined
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
