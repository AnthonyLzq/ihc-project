import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import CustomBelowButtonText from './CustomBelowButtonText'
import { GoBackProps } from '../types/props'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

const GoBack: React.FC<GoBackProps> = (props) => {
  const { onPress } = props

  return (
    <TouchableOpacity style={classes.container} onPress={onPress}>
      <Icon
        iconStyle={{
          marginTop: 0.75
        }}
        color={COLORS.RED}
        name='chevron-left'
        type='material'
        size={16}
      />
      <CustomBelowButtonText text='Go back' />
    </TouchableOpacity>
  )
}

export default GoBack
