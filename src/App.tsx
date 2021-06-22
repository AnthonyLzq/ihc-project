import React from 'react'
import AppLoading from 'expo-app-loading'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts, Play_400Regular } from '@expo-google-fonts/play'
import { Padauk_700Bold } from '@expo-google-fonts/padauk'
import { Mukta_400Regular, Mukta_700Bold } from '@expo-google-fonts/mukta'

import SignIn from './screens/SignIn'
import SignInEmail from './screens/SignInEmail'
import SelectCourses from './screens/SelectCourses'

const Stack = createStackNavigator()

const App = () => {
  const [fondLoaded] = useFonts({
    Catamaran: require('../assets/fonts/Catamaran-VariableFont_wght.ttf'),
    Padauk_700Bold,
    Play_400Regular,
    Mukta_400Regular,
    Mukta_700Bold
  })

  if (!fondLoaded)
    return <AppLoading />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignInEmail' component={SignInEmail} />
      <Stack.Screen name='SelectCourses' component={SelectCourses} />
    </Stack.Navigator>
  )
}

export default App
