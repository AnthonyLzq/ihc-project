import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import {
  CustomInput,
  CustomButton,
  GoBack
} from '../components'
import { SignInBottomText } from './components'
import { GeneralScreenProps } from '../types/props'
import { COLORS, FONTS } from '../utils'

const classes = StyleSheet.create({
  container: {
    alignItems     : 'center',
    backgroundColor: COLORS.SECOND_BLACK,
    height         : '100%',
    width          : '100%',
    padding        : 32
  },
  textBelowButtonContainer: {
    marginTop     : 25,
    width         : '100%'
  },
  titleContainer: {
    alignItems  : 'center',
    marginBottom: 40,
    marginTop   : 50
  },
  text: {
    color: COLORS.WHITE
  },
  textTitle: {
    fontFamily: FONTS.SECONDARY.BOLD,
    fontSize  : 24
  }
})

const SignUpEmailFirstStep: React.FC<GeneralScreenProps> = props => {
  const { navigation } = props

  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <View style={classes.titleContainer}>
        <Text style={[classes.text, classes.textTitle]}>Enter your names</Text>
      </View>
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Names',
          placeHolderTextColor: COLORS.LEAD,
          size                : 14
        }}
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Lastnames',
          placeHolderTextColor: COLORS.LEAD,
          size                : 14
        }}
      />
      <CustomButton
        hasIconRight={true}
        icon={{
          color: COLORS.WHITE,
          name : 'navigate-next',
          size : 16,
          type : 'material'
        }}
        onPress={() => navigation.navigate('SignUpEmailSecondStep')}
        style={{
          color    : COLORS.PURPLE,
          titleSize: 16
        }}
        title='CONTINUE'
      />
      <View style={classes.textBelowButtonContainer}>
        <GoBack onPress={() => navigation.navigate('SignUp')}/>
      </View>
      <SignInBottomText navigation={navigation} />
    </View>
  )
}

export default SignUpEmailFirstStep
