import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { SignUpEmailFirstStepProps } from '../types/props'
import {
  CustomInput,
  CustomButton,
  GoBack
} from '../components'
import { SignInBottomText } from './components'
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

const SignUpEmailFirstStep: React.FC<SignUpEmailFirstStepProps> = props => {
  const { navigation } = props
  const [names, setNames] = React.useState<string>('')
  const [lastnames, setLastnames] = React.useState<string>('')

  const handleOnChangeNames = (text: string) => setNames(text)
  const handleOnChangeLastnames = (text: string) => setLastnames(text)
  const continueFormToNextView = () => 
    navigation.navigate('SignUpEmailSecondStep', {
      names
    })

  const navigateToBackScreen = () => navigation.navigate('SignUp')

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
          size                : 16
        }}
        onChangeText={handleOnChangeNames}
      />
      <CustomInput
        style={{
          color               : COLORS.WHITE,
          placeHolder         : 'Last name',
          placeHolderTextColor: COLORS.LEAD,
          size                : 16
        }}
        onChangeText={handleOnChangeLastnames}
      />
      <CustomButton
        hasIconRight={true}
        icon={{
          color: COLORS.WHITE,
          name : 'navigate-next',
          size : 16,
          type : 'material'
        }}
        onPress={continueFormToNextView}
        style={{
          color    : COLORS.PURPLE,
          titleSize: 16
        }}
        title='CONTINUE'
        disabled={names.length === 0 || lastnames.length === 0}
      />
      <View style={classes.textBelowButtonContainer}>
        <GoBack onPress={navigateToBackScreen}/>
      </View>
      <SignInBottomText navigation={navigation} />
    </View>
  )
}

export default SignUpEmailFirstStep
