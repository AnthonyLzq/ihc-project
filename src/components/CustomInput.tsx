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
    marginBottom   : 25,
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
      icon,
      fontFamily = FONTS.INPUT.REGULAR,
      marginTop,
      placeHolder,
      placeHolderTextColor,
      size
    },
    secureTextEntry = false
  } = props
  const [viewStyles, setViewStyles] = React.useState<Record<string, unknown>[]>(
    [classes.input]
  )

  React.useEffect(() => {
    if (marginTop) setViewStyles([...viewStyles, { marginTop }])
  }, [])

  return (
    <View style={[...viewStyles, icon ? {} : classes.withoutIcon]}>
      <Input
        leftIcon={
          icon ? (
            <Icon color={placeHolderTextColor} name={icon} size={size} />
          ) : undefined
        }
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={{ color, fontSize: size, fontFamily }}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default CustomInput
