import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

import SvgBrain from './SvgBrain'
import { HeaderProps } from '../types/props'
import { COLORS, logoutAlert } from '../utils'
import { useFirebase } from 'react-redux-firebase'

const classes = StyleSheet.create({
  container: {
    alignItems     : 'center',
    backgroundColor: COLORS.MAIN_BLACK,
    flexDirection  : 'row',
    justifyContent : 'space-between',
    padding        : 32,
    width          : '100%'
  }
})

const Header: React.FC<HeaderProps> = props => {
  const {
    goBack = false,
    style: { height } = { height: '12%' },
    navigation
  } = props
  const firebase = useFirebase()

  return (
    <View style={[{ height }, classes.container]}>
      {/* {goBack && <Text>Hi</Text>} */}
      <SvgBrain height='32' width='30.25' />
      <TouchableOpacity onPress={() => logoutAlert(navigation, firebase)}>
        <Icon
          color={COLORS.WHITE}
          iconStyle={{
            height: 22.2,
            width: 20
          }}
          name='logout'
          type='material-community'
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header
