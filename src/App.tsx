import React from 'react'
import AppLoading from 'expo-app-loading'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts, Play_400Regular } from '@expo-google-fonts/play'
import { Padauk_700Bold } from '@expo-google-fonts/padauk'

import SignInEmail from './screens/SignInEmail'

const Stack = createStackNavigator()

const App = () => {
  const [fondLoaded] = useFonts({
    Catamaran: require('../assets/fonts/Catamaran-VariableFont_wght.ttf'),
    Padauk_700Bold,
    Play_400Regular
  })

  if (!fondLoaded)
    return <AppLoading />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='SignInEmail' component={SignInEmail}/>
    </Stack.Navigator>
  )
}

export default App
