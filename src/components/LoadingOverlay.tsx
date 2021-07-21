import React from 'react'
import { View, Text, Animated, Easing, StyleSheet } from 'react-native'

import SvgBrain from './SvgBrain'
import { FONTS, COLORS } from '../utils'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useAppSelector } from '../hooks'

const svgSize = '100'

const classes = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1000,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  subtitle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.LOGO.BOLD,
    marginTop: 30,
    fontSize: 18
  }
})

const LoadingOverlay = () => {
  const isSignUpLoading = useAppSelector(state => state.userReducer.signUp.isLoading)
  const isSignInLoading = useAppSelector(state => state.userReducer.signIn.isLoading)
  const isAllSyllabusLoading = useAppSelector(state => state.syllabusReducer.allSyllabus.isLoading)
  const isSelectingSyllabus = useAppSelector(state => state.userReducer.selectedSyllabus.isLoading)
  const isLoading = isSignUpLoading || isSignInLoading || isAllSyllabusLoading || isSelectingSyllabus
  const spinValue = new Animated.Value(0)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start()

  if (!isLoading)
    return null

  return (
    <View style={classes.overlay}>
      <Animated.View
        style={{
          transform: [{ rotate: spin }]
        }}
      >
        <SvgBrain width={svgSize} height={svgSize} />
      </Animated.View>
      <Text style={classes.subtitle}>Loading...</Text>
    </View>
  )
}

export default LoadingOverlay

