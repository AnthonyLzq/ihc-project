import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Input } from 'react-native-elements'

import { CustomInputProps } from '../types/props'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  input: {
    backgroundColor: COLORS.MAIN_BLACK,
    borderRadius   : 6,
    height         : 48,
    marginBottom   : 25,
    width          : '84%'
  }
})

const CustomInput = ({
  style: {
    color,
    icon,
    fontFamily = 'Catamaran',
    marginTop,
    placeHolder,
    placeHolderTextColor,
    size
  },
  secureTextEntry = false
}: CustomInputProps) => {
  const [viewStyles, setViewStyles] = React.useState<Record<string, unknown>[]>(
    [classes.input]
  )

  React.useEffect(() => {
    if (marginTop)
      setViewStyles([...viewStyles, { marginTop }])
  }, [])

  return (
    <View style={viewStyles}>
      <Input
        leftIcon={
          <Icon
            color={color}
            name={icon}
            size={size}
          />
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