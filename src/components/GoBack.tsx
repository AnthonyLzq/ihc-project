import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

import CustomBelowButtonText from './CustomBelowButtonText'
import { COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

const GoBack = () => {
  return (
    <View style={classes.container}>
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
    </View>
  )
}

export default GoBack
